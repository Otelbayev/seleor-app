import Filter from "@/components/shared/filter";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import OrderActions from "../_components/order-actions";

const Page = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="text-xl font-bold">Payments</div>
        <Filter />
      </div>
      <Separator className="my-3" />
      <Table>
        <TableCaption>A list of your recent payments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Avtive</TableCell>
            <TableCell>1</TableCell>
            <TableCell className="text-right">100$</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="font-bold">
              Total
            </TableCell>
            <TableCell className="text-right">200$</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default Page;
