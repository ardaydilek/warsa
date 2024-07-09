import React from "react";
import { InputProps } from "./input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { Button } from "./button";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-14 items-center rounded-full border border-primary bg-surface-container-high pl-5 ring-offset-background focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-2 min-w-80",
          className
        )}
      >
        <input
          {...props}
          type="search"
          ref={ref}
          className="w-full placeholder:text-surface-on-variant placeholder:text-base placeholder:font-bold focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-inherit font-bold text-surface-on-variant"
        />
        <Button
          type="submit"
          size="icon"
          className="min-w-[48px] w-12 h-12 rounded-full m-1"
        >
          <SearchIcon className="text-surface-variant" />
        </Button>
        {/* <div className="min-w-12 w-12 h-12 rounded-full bg-primary m-1 flex items-center justify-center"> */}
        {/* </div> */}
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };
