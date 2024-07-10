import { WarsaDark, WarsaLight } from "@/components/icons";
import { Label } from "@/components/ui/label";
import {
  FooterLeftLinks,
  FooterMetadata,
  FooterMiddleLinks,
  FooterRightLinks,
} from "@/lib/mock-data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer({}) {
  return (
    <footer className="md:container">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-4 justify-between border-y border-outline-variant px-4 xs:px-10 py-6">
        {/* Left */}
        <aside className="flex flex-col gap-4">
          <>
            <Link
              href="/"
              className="w-44 h-10 flex items-center text-primary shrink-0"
              data-hide-on-theme="dark"
            >
              {/* <WarsaLight /> */}
              <Image
                src={"/warsa-light.svg"}
                alt="Warsa"
                width={208}
                height={40}
              />
            </Link>
            <Link
              href="/"
              className="w-44 h-10 flex items-center text-primary shrink-0"
              data-hide-on-theme="light"
            >
              {/* <WarsaDark /> */}
              <Image
                src={"/warsa-dark.svg"}
                alt="Warsa"
                width={208}
                height={40}
              />
            </Link>
          </>

          <ul className="flex flex-col gap-2 xs:flex-row xs:gap-4">
            {FooterLeftLinks.map((item) => (
              <li
                key={item.name}
                className={
                  "hover:text-primary transition-colors duration-300 ease truncate text-ellipsis"
                }
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Middle */}
        <aside className="flex flex-col gap-4">
          {/* Input */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="footer-newsletter"
              className="text-primary text-xs font-bold"
            >
              Arazi piyasası ve emlak güncellemeleri
            </Label>
            <div className="flex h-12 items-center rounded-lg bg-surface-container-high pl-4 pr-1 ring-offset-background focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-2 w-full max-w-80 xs:max-w-96 lg:max-w-auto">
              <input
                type="email"
                placeholder="Abone ol"
                name="footer-newsletter"
                id="footer-newsletter"
                className="w-full placeholder:text-surface-on-variant placeholder:text-base placeholder:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-inherit font-medium text-surface-on-variant"
              />
              <div className="bg-primary text-primary-foreground w-12 h-10 rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors duration-300 ease hover:cursor-pointer">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          </div>

          <ul className="grid xs:grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
            {FooterMiddleLinks.map((item) => (
              <li
                key={item.name}
                className={
                  "hover:text-primary transition-colors duration-300 ease text-outline text-sm truncate text-ellipsis"
                }
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right */}
        <aside className="flex flex-col gap-4 text-surface-foreground">
          <p className="text-sm font-medium">
            Öneriniz mi var?{" "}
            <Link
              href="/"
              className="font-bold text-primary underline"
            >
              Gelişmemize yardımcı ol
            </Link>
          </p>

          <ul className="flex gap-4">
            {FooterRightLinks.map((item) => {
              const Icon = item.Icon;
              return (
                <li
                  key={item.name}
                  className={
                    "w-12 h-12 rounded-full grid place-items-center bg-surface-container-high text-surface-on-variant hover:text-primary hover:bg-surface-container transition-colors duration-300 ease"
                  }
                >
                  <Link
                    href={item.href}
                    className="w-6 h-6 block"
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>

      <div className="py-6 px-10 flex justify-between text-primary text-sm font-medium">
        <p className="">
          <b>© Warsa.</b> Bütün hakları saklıdır.
        </p>

        <ul className="flex gap-1.5 items-center">
          {FooterMetadata.map((item) => (
            <li
              key={item.name}
              className={
                "hover:text-secondary transition-colors duration-300 ease after:content-['•'] after:ml-1.5 after:text-primary last:after:content-['']"
              }
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
