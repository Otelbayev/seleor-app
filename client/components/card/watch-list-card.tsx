"use client";

import { IProduct } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import NoSSR from "react-no-ssr";
import { formatPrice } from "@/lib/utils";

interface Props {
  product: Partial<IProduct>;
}

const WatchListCard: FC<Props> = ({ product }) => {
  return (
    <div className="border relative flex flex-col ">
      <div className="bg-secondary relative">
        <Image
          src={product.image!}
          alt={product.title!}
          className="mx-auto"
          width={200}
          height={200}
        />
        <div className="absolute right-0 top-0 z-0 flex items-center">
          <Button size={"icon"} variant="ghost">
            <Heart className="text-red-500 fill-red-500" />
          </Button>
        </div>
      </div>
      <div className={"p-2"}>
        <div className={"flex items-center justify-between text-sm"}>
          <h1 className={"font-bold"}>{product.title}</h1>
          <NoSSR>
            <p className={"font-medium"}>{formatPrice(+product.price!)}</p>
          </NoSSR>
        </div>
        <p className={"text-sm text-muted-foreground line-clamp-1 leading-1"}>
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default WatchListCard;
