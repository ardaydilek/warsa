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

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
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
          className="w-full placeholder:text-surface-on-variant placeholder:text-base placeholder:font-bold focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-inherit font-bold text-surface-on-variant"
          onClick={() => setOpen(true)}
        />

        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 mr-2">
          <span className="text-xs">⌘</span>K
        </kbd>
        <Button
          type="submit"
          size="icon"
          className="min-w-[48px] w-12 h-12 rounded-full m-1"
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
                <CommandItem key={`land-item-${item.title}`}>
                  <House className="mr-2 h-4 w-4" />
                  <span className="">{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Şehirler">
              {LandCounties.map((item) => (
                <CommandItem key={`land-item-${item}`}>
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="">{item}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };
