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
      <div className="flex flex-col justify-between gap-8 border-y border-outline-variant px-4 py-6 xs:px-10 lg:flex-row lg:gap-4">
        {/* Left */}
        <aside className="flex flex-col gap-4">
          <>
            <Link
              href="/"
              className="flex h-10 w-44 shrink-0 items-center text-primary"
              data-hide-on-theme="dark"
            >
              {/* <WarsaLight /> */}
              <WarsaLight />
            </Link>
            <Link
              href="/"
              className="flex h-10 w-44 shrink-0 items-center text-primary"
              data-hide-on-theme="light"
            >
              {/* <WarsaDark /> */}
              <WarsaDark />
            </Link>
          </>

          <ul className="flex flex-col gap-2 xs:flex-row xs:gap-4">
            {FooterLeftLinks.map((item) => (
              <li
                key={item.name}
                className={
                  "ease truncate transition-colors duration-300 hover:text-primary"
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
              className="text-xs font-bold text-primary"
            >
              Arazi piyasası ve emlak güncellemeleri
            </Label>
            <div className="lg:max-w-auto flex h-12 w-full max-w-80 items-center rounded-lg bg-surface-container-high pl-4 pr-1 ring-offset-background focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-2 xs:max-w-96">
              <input
                type="email"
                placeholder="Abone ol"
                name="footer-newsletter"
                id="footer-newsletter"
                className="w-full bg-inherit font-medium text-surface-on-variant placeholder:text-base placeholder:font-medium placeholder:text-surface-on-variant focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
              <div className="ease flex h-10 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors duration-300 hover:cursor-pointer hover:bg-primary/80">
                <ChevronRight className="size-6" />
              </div>
            </div>
          </div>

          <ul className="grid gap-2 xs:grid-cols-2 sm:grid-cols-3 sm:gap-4">
            {FooterMiddleLinks.map((item) => (
              <li
                key={item.name}
                className={
                  "ease truncate text-sm text-outline transition-colors duration-300 hover:text-primary"
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
                    "ease grid size-12 place-items-center rounded-full bg-surface-container-high text-surface-on-variant transition-colors duration-300 hover:bg-surface-container hover:text-primary"
                  }
                >
                  <Link
                    href={item.href}
                    className="block size-6"
                  >
                    <Icon className="size-6" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>

      <div className="flex justify-between px-10 py-6 text-sm font-medium text-primary">
        <p className="">
          <b>© Warsa.</b> Bütün hakları saklıdır.
        </p>

        <ul className="flex items-center gap-1.5">
          {FooterMetadata.map((item) => (
            <li
              key={item.name}
              className={
                "ease transition-colors duration-300 after:ml-1.5 after:text-primary after:content-['•'] last:after:content-[''] hover:text-secondary"
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
