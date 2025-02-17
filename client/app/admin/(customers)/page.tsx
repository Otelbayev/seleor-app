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
} from "@/components/ui/table";

const Page = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="text-xl font-bold">Customers</div>
        <Filter />
      </div>
      <Separator className="my-3" />

      <Table>
        <TableCaption>A list of your recent costumers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>№</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Payments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>jasurd@kvnskjn.vom</TableCell>
            <TableCell>None</TableCell>
            <TableCell>order</TableCell>
            <TableCell>Active</TableCell>
            <TableCell className="text-right">100$</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Page;
