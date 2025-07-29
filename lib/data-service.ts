import { connectMongo } from "@/lib/mongoose";
import Product from "@/lib/models/Product";

export async function getProducts() {
  await connectMongo();
  return Product.find().lean<ProductType[]>();
}

export async function getNewProducts() {
  await connectMongo();
  return Product.find({}, null, { sort: { _id: -1 }, limit: 10 }).lean();
}

export async function getProductById(id: string) {
  await connectMongo();
  return Product.findById(id).lean<ProductType>();
}

export async function getProductsById(ids: object) {
  await connectMongo();
  return Product.find({ _id: ids }).lean<ProductType[]>();
}
