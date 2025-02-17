import React from "react";
import { Separator } from "@/components/ui/separator";
import AddProduct from "../_components/add-product";
import Filter from "@/components/shared/filter";
import { products } from "@/lib/constants";
import ProductCartd from "../_components/product-catd";

const Page = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="text-xl font-bold">Products</div>
        <AddProduct />
      </div>
      <Separator className="my-3" />

      <Filter showCategory />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCartd key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Page;
