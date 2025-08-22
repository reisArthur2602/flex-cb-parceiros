"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const NAVIGATION_MENU_LINKS = [
  { label: "Catálogo de parceiros", link: "#partner" },
  { label: "Contatos", link: "#contacts" },
];

export const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between p-6">
        <Logo />

        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          {NAVIGATION_MENU_LINKS.map((link) => (
            <a
              key={link.link}
              href={link.link}
              className="text-sm font-medium  transition-colors capitalize"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button className="hidden md:block">Quero aproveitar agora</Button>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="container border-t border-gray-100 px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {NAVIGATION_MENU_LINKS.map((link) => (
              <a
                key={link.link}
                href={link.link}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 capitalize"
              >
                {link.label}
              </a>
            ))}

            <Button size="sm" className="w-full justify-center">
              Quero aproveitar agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
