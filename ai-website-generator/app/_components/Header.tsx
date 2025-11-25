import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { ArrowRight, Link } from "lucide-react";
import { SignInButton } from '@clerk/nextjs'
import { User } from "@clerk/nextjs/server";

const MenuOptions = [
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

function Header() {
  return (
    <div className='flex items-center justify-between p-4 shadow'>
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="Logo" width={35} height={35} />
        <h2 className="font-bold text-xl">AI Website Generator</h2>
      </div>

      {/* Menu Options */}
      <div className='flex gap-3'>
        {MenuOptions.map((menu, index) => (
          <Button variant={'ghost'} key={index}>{menu.name}</Button>
        ))}
      </div>

      {/* Get Started Button */}
        
      <div>
        {/* Using SignInButton from Clerk for authentication - Using mode = 'modal' signin window will come as pop in landing page */}
        
        {!User ? <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
        
        <Button>Get Started <ArrowRight/></Button>
      
        </SignInButton>
            :
            <Link href={'/workspace'}>
              <Button>Get <ArrowRight/></Button>
            </Link>
        }
      </div>
    </div>
  )
}

export default Header;
