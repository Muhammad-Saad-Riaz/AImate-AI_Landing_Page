"use client";

import { Image } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "./ui/button";
import { useState } from "react";

const components: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full bg-primary-foreground ">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-3 pl-4 pr-4">
          {/* Hamburger menu button for mobile */}
          <Button
            variant={"outline"}
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </Button>

          {/* Left side Logo */}
          <Link className="flex justify-center" href="/">
            <span className="flex gap-2  ">
              <Image />
              <span className="text-xl font-semibold">AImate</span>
            </span>
          </Link>

          {/* Dekstop menu */}
          <span className="hidden md:flex grow justify-center">
            <ul className="flex gap-2 ">
              {components.map((component) => (
                <li key={component.title}>
                  <Link
                    className="text-center hover:bg-background p-2 rounded-md"
                    href={component.href}
                  >
                    {component.title}
                  </Link>
                </li>
              ))}
            </ul>
          </span>

          {/* Right Side */}
          <span className="flex justify-center gap-3 ">
            <ModeToggle />
            <Button variant={"destructive"}>Login</Button>
          </span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-primary-foreground border-t border-gray-300 transition-all duration-500 ease-in-out overflow-hidden 
            ${menuOpen ? "max-h-screen border-b " : "max-h-0 border-b-0"}
          `}
        // The overflow-hidden and max-h-0/max-h-screen combined with transition-all create the slide effect.
      >
        <ul className="flex flex-col items-center py-2 text-lg px-6">
          {components.map((component) => (
            <li key={component.title}>
              <Link
                onClick={() => setMenuOpen(false)}
                className="block w-screen text-center py-2 hover:font-semibold"
                href={component.href}
              >
                {component.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
