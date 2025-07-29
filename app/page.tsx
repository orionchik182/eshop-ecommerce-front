
import Featured from "@/components/layout/Featured";
import Header from "@/components/layout/Header";
import NewProducts from "@/components/layout/NewProducts";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Header />
      <Featured />
      <NewProducts />
    </>
  );
}
