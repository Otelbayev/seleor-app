import { ChildProps } from "@/types";
import React, { FC } from "react";
import Sidebar from "./_components/sidebar";

const DashboardLayout: FC<ChildProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-2 pb-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
