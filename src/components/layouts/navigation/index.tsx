import Link from "next/link";

import { NavigationLinkItems } from "./navigation-link-items";

import NavigationButtons from "./navigation-buttons";
import { WarsaDark, WarsaLight } from "@/components/icons";

export default function Navigation({}) {
  return (
    <header className="fixed z-[99] flex h-16 w-full items-center border-primary/40 bg-surface/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-surface/60 md:px-0">
      <nav className="mx-auto flex w-full  items-center justify-between md:container">
        <>
          <Link
            href="/"
            className="flex h-10 w-44 items-center text-primary xs:w-52"
            data-hide-on-theme="dark"
          >
            <WarsaLight />
          </Link>
          <Link
            href="/"
            className="flex h-10 w-44 items-center text-primary xs:w-52"
            data-hide-on-theme="light"
          >
            <WarsaDark />
          </Link>
        </>

        <NavigationLinkItems className="hidden lg:flex" />

        <NavigationButtons />
      </nav>
    </header>
  );
}
