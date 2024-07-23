import { ModeToggle } from "@/components/mode-toggle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page({}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/brand">
        <ArrowLeft />
      </Link>
      Temayı Değiştir
      <ModeToggle />
      <div className="grid grid-cols-4 my-20 gap-4">
        {/* Primary */}
        <div className="w-[200px] h-[200px] bg-primary  text-primary-foreground rounded-lg grid place-items-center hover:bg-inverse-primary hover:text-primary">
          primary
        </div>
        {/* Secondary */}
        <div className="w-[200px] h-[200px] bg-secondary text-secondary-foreground rounded-lg grid place-items-center">
          card
        </div>
        {/* Tertiary */}
        <div className="w-[200px] h-[200px] bg-tertiary text-tertiary-foreground rounded-lg grid place-items-center">
          tertiary
        </div>
        {/* Error */}
        <div className="w-[200px] h-[200px] bg-error text-error-foreground rounded-lg grid place-items-center">
          error
        </div>
        {/* Background */}
        <div className="w-[200px] h-[200px] bg-background text-foreground rounded-lg grid place-items-center">
          background
        </div>
        {/* Surface & Variants */}
        <div className="w-[200px] h-[200px] bg-surface text-surface-foreground rounded-lg grid place-items-center">
          plain surface
        </div>
        <div className="w-[200px] h-[200px] bg-surface-variant text-surface-foreground rounded-lg grid place-items-center">
          surface variant
        </div>
        <div className="w-[200px] h-[200px] bg-surface-container text-surface-foreground rounded-lg grid place-items-center">
          surface container
        </div>
        {/* Outline */}
        <div className="w-[200px] h-[200px] bg-outline text-primary-foreground rounded-sm grid place-items-center">
          outline
        </div>
        <div className="w-[200px] h-[200px] bg-outline-variant text-primary rounded-sm grid place-items-center">
          outline variant
        </div>
        {/* Scrim */}
        <div className="w-[200px] h-[200px] bg-scrim text-white rounded-sm grid place-items-center">
          scrim
        </div>
        {/* Inverse Surface */}
        <div className="w-[200px] h-[200px] bg-inverse-surface text-surface rounded-sm grid place-items-center">
          Inverse Surface
        </div>
        <div className="w-[200px] h-[200px] bg-inverse-primary text-black rounded-sm grid place-items-center">
          Inverse Primary
        </div>
        <div className="w-[200px] h-[200px] bg-primary-fixed text-black rounded-sm grid place-items-center">
          ring
        </div>
      </div>
    </main>
  );
}
