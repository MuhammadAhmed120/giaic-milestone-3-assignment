import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full h-12 px-2 md:px-8 bg-yellow-300 flex !items-center shadow-lg">
      <Link href="/">
        <h1 className="uppercase text-sm font-extrabold md:text-lg text-slate-800">
          Dynamic Blog
        </h1>
      </Link>
    </header>
  );
};

export default Header;
