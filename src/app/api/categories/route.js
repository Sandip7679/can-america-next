//  import clientPromise from '@/lib/mongodb';
// import { NextResponse } from 'next/server';
// import clientPromise from '@/lib/mongo';

import Category from "@/models/Category";
import { NextResponse } from "next/server";

export async function GET() {
  let categories = await Category.find({}).lean();
  // let res = buildCategoryTree(categories);
  let res = findCategories(categories);
  // console.log('res...',res);s

  return NextResponse.json(res);
}

function buildCategoryTree(flatArray) {
  const idMap = {};
  const tree = [];

  flatArray.forEach((item) => {
    idMap[item._id] = { ...item, categories: [] };
  });
  flatArray.forEach((item) => {
    const node = idMap[item._id];
    if (!item.parent_id) {
      tree.push(node);
    } else {
      const parent = idMap[item.parent_id];
      if (parent) {
        parent.categories.push(node);
      } else {
        tree.push(node);
      }
    }
  });
  return tree;
}

function findCategories(categories) {
  const categoryMap = new Map();

  // First pass: store each category by _id and initialize children
  for (const category of categories) {
    const cat = category;
    cat.children = [];
    categoryMap.set(cat._id.toString(), cat);
  }

  // Second pass: link children to their parents
  const topLevelCategories = [];

  for (const category of categoryMap.values()) {
    if (category.parent_id) {
      const parent = categoryMap.get(category.parent_id.toString());
      if (parent) {
        parent.children.push(category);
      }
    } else {
      topLevelCategories.push(category);
    }
  }

  // Third pass: clean and group
  const grouped = {};

  const stripFields = (cat) => {
    const {
      description1,
      description2,
      description,
      image1,
      image2,
      children,
      ...rest
    } = cat;
    return {
      ...rest,
      [cat.name]: children?.map(stripFields) || [],
    };
  };

  for (const top of topLevelCategories) {
    const cleaned = stripFields(top);
    grouped[top.name] = [cleaned];
  }

  // return { statusCode: 200, details: grouped };
  return grouped;
}
