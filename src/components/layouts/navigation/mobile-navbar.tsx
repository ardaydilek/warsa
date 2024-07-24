"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ListItems } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { LogOut, MenuIcon, X } from "lucide-react";

import { SignOutButton } from "@clerk/nextjs";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-1 pt-16">
      {ListItems.map((link) => {
        const isActive =
          (pathname.includes(link.href) && link.href.length > 1) ||
          pathname === link.href;
        const Icon = link.icon;
        return (
          <SheetClose
            asChild
            key={link.href}
          >
            <Link
              href={link.href}
              className={cn(
                "flex items-center justify-start gap-4 bg-transparent p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease",
                isActive
                  ? "bg-primary text-primary-foreground rounded-lg hover:bg-primary/80"
                  : "text-surface-foreground"
              )}
            >
              <Icon className="size-5" />
              <p
                className={cn(
                  "text-base",
                  isActive ? "font-bold" : "font-medium"
                )}
              >
                {link.name}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

export function MobileNavbar({}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        {!open ? (
          <Button
            variant="ghost"
            size="icon"
            className="text-primary lg:hidden"
          >
            <MenuIcon className="size-5 text-primary" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="text-primary lg:hidden"
          >
            <X className="size-5 text-primary" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="border-none bg-surface"
      >
        {/* SR Only */}
        <SheetHeader
          className="sr-only"
          aria-hidden="true"
        >
          <SheetTitle
            className="sr-only"
            aria-hidden="true"
          >
            Mobil Menü Bar
          </SheetTitle>
          <SheetDescription
            className="sr-only"
            aria-hidden="true"
          >
            Tablet ve daha küçük ekranlar için menü.
          </SheetDescription>
        </SheetHeader>
        {/* SR Only */}
        <div className="flex h-full flex-col justify-between pb-4">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedIn>
            <SignOutButton>
              <SheetClose asChild>
                <Button className="space-x-4">
                  <LogOut className="size-4" />
                  <span className="text-primary-foreground">Çıkış Yap</span>
                </Button>
              </SheetClose>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href={"/sign-in"}>
                  <Button className="w-full">
                    <span className="text-primary-foreground">Giriş Yap</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href={"/sign-up"}>
                  <Button className="w-full bg-surface-container-high text-surface-foreground hover:text-surface">
                    Kayıt Ol
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
}
