"use client";

import { IProduct } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import NoSSR from "react-no-ssr";

interface ProductCardProps {
  product: Partial<IProduct>;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product/${product._id}`)}
      className="cursor-pointer"
    >
      <div className="bg-secondary relative group">
        <Image
          src={product.image!}
          alt={product.title!}
          width={300}
          height={300}
          className="mx-auto"
        />

        <div className="absolute right-0 top-0 z-50 opacity-0 group-hover:opacity-100 transition-all">
          <Button size={"icon"}>
            <Heart />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 text-sm">
        <div className="font-bold line-clamp-1">{product.title}</div>
        <NoSSR>
          <div className="font-medium">{formatPrice(product.price!)}</div>
        </NoSSR>
      </div>
      <p className="text-sm text-muted-foreground">{product.category}</p>
    </div>
  );
};

export default ProductCard;
