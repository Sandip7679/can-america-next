//  import clientPromise from '@/lib/mongodb';
// import { NextResponse } from 'next/server';
// import clientPromise from '@/lib/mongo';

import Category from "@/models/Category";
import { NextResponse } from "next/server";

export async function GET() {
  let categories = await Category.find({}).lean();
    let res = buildCategoryTreeE(categories);

  return NextResponse.json(res);
}

 function buildCategoryTreeE(flatArray) {
    const idMap = {};
    const tree = [];

    flatArray.forEach((item) => {
      idMap[item.id] = {...item, categories: [] };
    });
    flatArray.forEach((item) => {
      const node = idMap[item.id];
      if (item.parent_id === null || item.parent_id === undefined) {
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
