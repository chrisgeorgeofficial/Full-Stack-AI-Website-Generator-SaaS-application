import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const MenuOptions = [
  {
    name: "pricing",
    path: "/pricing",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

function Header() {
  return (
    <div>
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="Logo" width={35} height={35} />
        <h2 className="font-bold text-xl">AI Website Generator</h2>
      </div>

      {/* Menu Options */}
      <div>
        {MenuOptions.map((menu, index) => (
          <Button key={index}>{menu.name}</Button>
        ))}
      </div>

      {/* Get Started Button */}
    </div>
  );
}

export default Header;
