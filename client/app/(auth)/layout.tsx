import { ChildProps } from "@/types";

const AuthLayout = ({ children }: ChildProps) => {
  return <div className="flex justify-center mt-44">{children}</div>;
};

export default AuthLayout;
