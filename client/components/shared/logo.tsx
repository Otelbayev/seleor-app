import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <img src={"/logo.svg"} alt="logo" />
    </Link>
  );
};

export default Logo;
