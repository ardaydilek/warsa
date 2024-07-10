import Link from "next/link";
import { WarsaDark, WarsaLight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { NavigationLinkItems } from "./navigation-link-items";
import { Menu } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ListItems } from "@/lib/mock-data";

export default function Navigation({}) {
  return (
    <header className="bg-surface h-16 py-2 fixed w-full flex items-center z-[99]">
      <nav className="md:container mx-auto w-full px-2 md:px-0  flex justify-between items-center">
        {/* Logo */}
        <>
          <Link
            href="/"
            className="w-52 h-10 flex items-center text-primary shrink-0"
            data-hide-on-theme="dark"
          >
            <WarsaLight />
          </Link>
          <Link
            href="/"
            className="w-52 h-10 flex items-center text-primary shrink-0"
            data-hide-on-theme="light"
          >
            <WarsaDark />
          </Link>
        </>

        {/* Menu */}
        <NavigationLinkItems className="hidden lg:flex" />

        {/* Buttons */}
        <div className="flex gap-2 items-center">
          <div className="hidden md:flex gap-2 items-center">
            <Button
              variant={"outline"}
              className="rounded-lg text-primary font-bold hover:bg-primary hover:text-primary-foreground"
            >
              Kayıt Ol
            </Button>
            <Button className="rounded-lg font-bold">Giriş Yap</Button>
          </div>
          <ModeToggle />

          <Popover>
            <PopoverTrigger className="lg:hidden">
              <Menu className="w-6 h-6 text-primary" />
            </PopoverTrigger>
            <PopoverContent
              className="z-[100] w-52 mt-2"
              align="end"
            >
              <ul
                className={cn(
                  "gap-4 font-medium items-center text-primary-foreground"
                )}
              >
                {ListItems.map((item) => (
                  <li
                    key={item.name}
                    className={cn(
                      "hover:text-surface-container hover:underline transition-colors duration-300 ease"
                    )}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
}
