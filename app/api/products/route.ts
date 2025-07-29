import { connectMongo } from "@/lib/mongoose";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectMongo();
  const { ids } = await req.json(); // Получаем массив ID из тела запроса

  if (!ids || ids.length === 0) {
    return NextResponse.json([]);
  }

  // Находим все продукты, чьи _id находятся в полученном массиве ids
  const products = await Product.find({ _id: { $in: ids } }).lean();

  return NextResponse.json(products);
}
