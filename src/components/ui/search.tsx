"use client";
import React from "react";
import { InputProps } from "./input";
import { cn } from "@/lib/utils";
import { House, MapPin, SearchIcon, User } from "lucide-react";
import { Button } from "./button";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { LandCounties, LandData } from "@/lib/mock-data";
import { useRouter } from "next/navigation";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, []);

    return (
      <div
        className={cn(
          "flex h-14 items-center rounded-full bg-surface-container-high pl-5 ring-offset-background focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-2 min-w-80",
          className
        )}
      >
        <input
          {...props}
          type="search"
          ref={ref}
          className="w-full bg-inherit font-bold text-surface-on-variant placeholder:text-base placeholder:font-bold placeholder:text-surface-on-variant focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => setOpen(true)}
        />

        <kbd className="bg-muted text-muted-foreground pointer-events-none mr-2 inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
        <Button
          type="submit"
          size="icon"
          className="m-1 size-12 min-w-[48px] rounded-full"
        >
          <SearchIcon className="text-surface-variant" />
        </Button>

        <CommandDialog
          open={open}
          onOpenChange={setOpen}
        >
          <CommandInput placeholder="Proje Ara..." />
          <CommandList>
            <CommandEmpty>Bir sonuç bulamadık.</CommandEmpty>
            <CommandGroup heading="Projeler">
              {LandData.map((item) => (
                <CommandItem
                  key={`land-item-${item.title}`}
                  onSelect={() => router.push(`/lands/${item.slug}`)}
                  className="cursor-pointer"
                >
                  <House className="mr-2 size-4" />
                  <span className="">{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            {/* <CommandGroup heading="Şehirler">
              {LandCounties.map((item) => (
                <CommandItem key={`land-item-${item}`}>
                  <MapPin className="mr-2 size-4" />
                  <span className="">{item}</span>
                </CommandItem>
              ))}
            </CommandGroup> */}
          </CommandList>
        </CommandDialog>
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };
