import Filter from "@/components/shared/filter";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { products } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

const Page = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="text-xl font-bold">Payments</div>
        <Filter />
      </div>

      <Separator className="my-3" />

      <Table className="text-sm">
        <TableCaption>A list of your recent orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product.title}</TableCell>
              <TableCell>Click</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                {formatPrice(product.price)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Page;
