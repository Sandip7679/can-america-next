//  import clientPromise from '@/lib/mongodb';
// import { NextResponse } from 'next/server';
// import clientPromise from '@/lib/mongo';

import Category from "@/models/Category";
import { NextResponse } from "next/server";

export async function GET() {
  let categories = await Category.find({}).lean();
    let res = buildCategoryTree(categories);

  return NextResponse.json(res);
}

 function buildCategoryTree(flatArray) {
    const idMap = {};
    const tree = [];

    flatArray.forEach((item) => {
      idMap[item._id] = {...item, categories: [] };
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
