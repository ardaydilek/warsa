"use client";
import { ListItems } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationLinkItems({
  className,
  liClassNames,
}: {
  className?: string;
  liClassNames?: string;
}) {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        "gap-6 text-surface-foreground font-medium items-center",
        className
      )}
    >
      {ListItems.map((item) => (
        <li
          key={item.name}
          className={cn(
            "hover:text-primary transition-colors duration-300 ease",
            {
              "font-bold text-primary": pathname === item.href,
            },
            liClassNames
          )}
        >
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
