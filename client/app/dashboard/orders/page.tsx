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
        <div className="text-xl font-bold">Orders</div>
        <Filter />
      </div>

      <Separator className="my-3" />

      <Table className="text-sm">
        <TableCaption>A list of your recent orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Order Time</TableHead>
            <TableHead className="text-right">Update Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{formatPrice(product.price)}</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>10 NOV 2024</TableCell>
              <TableCell className="text-right">12 NOV 12:30 PM</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Page;
