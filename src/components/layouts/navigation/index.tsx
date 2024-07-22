import Link from "next/link";

import { NavigationLinkItems } from "./navigation-link-items";

import Image from "next/image";
import NavigationButtons from "./navigation-buttons";

export default function Navigation({}) {
  return (
    <header className="bg-surface h-16 py-2 fixed w-full flex items-center z-[99] px-4 md:px-0">
      <nav className="md:container mx-auto w-full  flex justify-between items-center">
        <>
          <Link
            href="/"
            className="w-44 xs:w-52 h-10 flex items-center text-primary shrink-0"
            data-hide-on-theme="dark"
          >
            <Image
              src={"/warsa-light.svg"}
              alt="Warsa"
              width={208}
              height={40}
            />
          </Link>
          <Link
            href="/"
            className="w-44 xs:w-52 h-10 flex items-center text-primary shrink-0"
            data-hide-on-theme="light"
          >
            <Image
              src={"/warsa-dark.svg"}
              alt="Warsa"
              width={208}
              height={40}
            />
          </Link>
        </>

        <NavigationLinkItems className="hidden lg:flex" />

        <NavigationButtons />
      </nav>
    </header>
  );
}
