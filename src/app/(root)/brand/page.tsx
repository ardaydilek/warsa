import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({}) {
  return (
    <div className="grid place-items-center gap-2 min-h-screen">
      <div className="flex flex-col gap-6">
        <Button
          asChild
          variant={"outline"}
        >
          <Link href="/brand/color-palette">Color Palette</Link>
        </Button>
        <Button
          asChild
          variant={"destructive"}
        >
          <Link href="/brand/brand-components">Components</Link>
        </Button>
      </div>
    </div>
  );
}
