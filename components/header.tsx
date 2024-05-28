"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AlignJustify } from 'lucide-react';
 
type Checked = DropdownMenuCheckboxItemProps["checked"]

const Header = () => {
  const currentPath = usePathname();

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
 

  const links = [
    { label: "Pengespillvett", href: "/" },
    { label: "Lover og Regler", href: "/lover" },
    { label: "Ressurser", href: "/ressurser" },
    { label: "Selvtest", href: "/quiz" },
  ];

  

  return (
    <header className="bg-white text-black font-bold py-4">
      <div className="ml-12 mr-12 mx-auto flex justify-between">
        <div className="ml-20 flex items-center">
            <a className="outline-none focus:outline-none focus-keyboard:ring-4 focus-keyboard:ring-offset-2 focus-keyboard:ring-blue-500 focus-keyboard:dark:ring-blue-400 ntds-hover-grow-md rounded-md flex justify-start items-center" data-track-id="navigation-topbar-logo" data-track-placement="top" href="/">
            <Image
                alt="Norsk Tipping"
                src="https://www.norsk-tipping.no/staticimages/ntds/logos/norsktipping/norsktipping-full-color.svg"
                className="h-9 transition duration-300"
                width={200} 
                height={50}
            />
            </a>
        </div>
        <nav className="flex">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className={classNames({
                    "text-black": link.href === currentPath,
                    "hover:text-black transition-colors": true,
                    "mr-4": true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

        {/*  <div className="relative inline-block">
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><AlignJustify /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;