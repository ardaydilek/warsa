import { auth, signOut } from "@/auth";
import Link from "next/link";
import { Menu } from "lucide-react";

import { ListItems } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import AuthButtons from "./auth-buttons";

export default async function NavigationButtons({}) {
  const session = await auth();

  return (
    <div className="flex gap-2 items-center">
      {!session?.user ? (
        <div className="hidden lg:flex gap-2 items-center">
          <AuthButtons />
        </div>
      ) : (
        <>
          {/* <p>Hesap</p> */}
          <form
            className="hidden lg:flex"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit">Çıkış Yap</Button>
          </form>
        </>
      )}

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

            {session?.user ? (
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <Button type="submit">Çıkış Yap</Button>
              </form>
            ) : (
              <AuthButtons />
            )}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}
