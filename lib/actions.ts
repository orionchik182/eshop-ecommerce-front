"use server";

import { revalidatePath } from "next/cache";
import { getProductsById } from "./data-service";
import Order from "./models/Order";
import { connectMongo } from "./mongoose";
import { redirect } from "next/navigation";




export default async function addOrder(formData: FormData) {
  //     const session = await auth();
  //   if (!session) throw new Error("You must be logged in");

  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const city = formData.get("city")?.toString();
  const postalCode = formData.get("postalCode")?.toString();
  const streetAddress = formData.get("streetAddress")?.toString();
  const country = formData.get("country")?.toString();
  const products = formData.get("products")?.toString() || undefined;

  const productsIds = products?.split(",");
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await getProductsById(uniqueIds);

  const line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productsIds?.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          corrency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: quantity * productInfo.price,
        },
      });
    }
  }

  await connectMongo()
  await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  

  revalidatePath("/cart")
  redirect("/thankYou")
}
