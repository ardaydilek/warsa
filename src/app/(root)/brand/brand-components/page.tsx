import {
  ArrowDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Construction,
  Email,
  Facebook,
  FavoriteBorder,
  Favorite,
  Gavel,
  Google,
  HideSource,
  Images,
  Info,
  Instagram,
  KingBed,
  Lease,
  Light,
  Linkedin,
  MapIcon,
  Phone,
  PlayCircleOutline,
  RealEstateAgent,
  SearchIcon,
  Sell,
  Shortcut,
  Shower,
  Twitter,
  UserIcon,
  WarsaCool,
} from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "@/components/ui/search";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page({}) {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-2 my-4">
        <Link href="/brand">
          <ArrowLeft />
        </Link>
        Temayı Değiştir
        <ModeToggle />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Buttons */}
        <div className="flex flex-col items-start gap-4 border border-primary rounded-lg p-4">
          <h2 className="font-bold underline">Button</h2>

          {/* Default */}
          <div className="flex gap-4 items-center">
            <Button
              variant={"default"}
              size={"lg"}
            >
              Default & Large
            </Button>
            <Button
              variant={"default"}
              size={"default"}
            >
              Default & Default
            </Button>
            <Button
              variant={"default"}
              size={"sm"}
            >
              Default & Small
            </Button>
            <Button
              variant={"default"}
              size={"icon"}
            >
              <WarsaCool
                key={"warsa-cool-1"}
                fill1="white"
                fill2="white"
              />
            </Button>
          </div>

          {/* Destructive */}
          <div className="flex gap-4 items-center">
            <Button
              variant={"destructive"}
              size={"lg"}
            >
              Destructive & Large
            </Button>
            <Button
              variant={"destructive"}
              size={"default"}
            >
              Destructive & Default
            </Button>
            <Button
              variant={"destructive"}
              size={"sm"}
            >
              Destructive & Small
            </Button>
            <Button
              variant={"destructive"}
              size={"icon"}
            >
              <WarsaCool
                key={"warsa-cool-2"}
                fill1="white"
                fill2="white"
              />
            </Button>
          </div>

          {/* Outline */}
          <div className="flex gap-4 items-center">
            <Button
              variant={"outline"}
              size={"lg"}
            >
              Outline & Large
            </Button>
            <Button
              variant={"outline"}
              size={"default"}
            >
              Outline & Default
            </Button>
            <Button
              variant={"outline"}
              size={"sm"}
            >
              Outline & Small
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
            >
              <WarsaCool
                key={"warsa-cool-3"}
                fill1="#614B40"
                fill2="#614B40"
              />
            </Button>
          </div>

          {/* Secondary */}
          <div className="flex gap-4 items-center">
            <Button
              variant={"secondary"}
              size={"lg"}
            >
              Secondary & Large
            </Button>
            <Button
              variant={"secondary"}
              size={"default"}
            >
              Secondary & Default
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
            >
              Secondary & Small
            </Button>
            <Button
              variant={"secondary"}
              size={"icon"}
            >
              <WarsaCool
                key={"warsa-cool-4"}
                fill1="white"
                fill2="white"
              />
            </Button>
          </div>

          {/* Ghost */}
          <div className="flex gap-4 items-center">
            <Button
              variant={"ghost"}
              size={"lg"}
            >
              Ghost & Large
            </Button>
            <Button
              variant={"ghost"}
              size={"default"}
            >
              Ghost & Default
            </Button>
            <Button
              variant={"ghost"}
              size={"sm"}
            >
              Ghost & Small
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="!text-primary"
            >
              <WarsaCool
                key={"warsa-cool-5"}
                fill1="#CDA998"
                fill2="#CDA998"
              />
            </Button>
          </div>

          {/* Link */}
          <div className="flex gap-4 items-center">
            <Button
              variant={"link"}
              size={"lg"}
            >
              Link & Large
            </Button>
            <Button
              variant={"link"}
              size={"default"}
            >
              Link & Default
            </Button>
            <Button
              variant={"link"}
              size={"sm"}
            >
              Link & Small
            </Button>
            <Button
              variant={"link"}
              size={"icon"}
            >
              <WarsaCool
                key={"warsa-cool-6"}
                fill1="#614B40"
                fill2="#614B40"
              />
            </Button>
          </div>

          {/* Chips */}
          <div className="flex gap-4 items-center">
            <Button
              variant={"chips"}
              size={"lg"}
            >
              Chips & Large
            </Button>
            <Button
              variant={"chips"}
              size={"default"}
            >
              Chips & Default
            </Button>
            <Button
              variant={"chips"}
              size={"sm"}
            >
              Chips & Small
            </Button>
            <Button
              variant={"chips"}
              size={"icon"}
            >
              <WarsaCool
                key={"warsa-cool-7"}
                fill1="#614B40"
                fill2="#614B40"
              />
            </Button>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col items-start gap-4 border border-primary rounded-lg p-4">
          <h2 className="font-bold underline">Inputs</h2>

          {/* Text */}
          <Input
            placeholder="Text"
            type="text"
          />
          {/* Search */}
          <Input
            placeholder="Search"
            type="search"
          />

          {/* Search Bar */}
          <div className="border-t border-secondary w-full">
            <Label htmlFor="search-bar">Search Bar</Label>
            <Search
              id="search-bar"
              name="search-bar"
              placeholder="Ankara, TR"
              className="w-full"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex flex-col items-start gap-4 border border-primary rounded-lg p-4">
          <h2 className="font-bold underline">Icons</h2>
          <div className="grid grid-cols-3 gap-12">
            <div className="flex flex-col items-start gap-4">
              <div className="w-6 h-6">
                <ArrowDown />
              </div>
              <div className="w-6 h-6">
                <ArrowUp />
              </div>
              <div className="w-6 h-6">
                <ChevronLeft color="black" />
              </div>
              <div className="w-6 h-6">
                <ChevronRight />
              </div>
              <div className="w-6 h-6">
                <Construction color="black" />
              </div>
              <div className="w-6 h-6">
                <Email />
              </div>
              <div className="w-6 h-6">
                <Facebook />
              </div>
              <div className="w-6 h-6">
                <FavoriteBorder />
              </div>
              <div className="w-6 h-6">
                <Favorite />
              </div>
              <div className="w-6 h-6">
                <Gavel />
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="w-6 h-6">
                <Google />
              </div>
              <div className="w-6 h-6">
                <HideSource />
              </div>
              <div className="w-6 h-6">
                <Images />
              </div>
              <div className="w-6 h-6">
                <Info />
              </div>
              <div className="w-6 h-6">
                <Instagram />
              </div>
              <div className="w-6 h-6">
                <KingBed />
              </div>
              <div className="w-6 h-6">
                <Lease />
              </div>
              <div className="w-6 h-6">
                <Light />
              </div>
              <div className="w-6 h-6">
                <Linkedin />
              </div>
              <div className="w-6 h-6">
                <MapIcon />
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="w-6 h-6">
                <Phone />
              </div>
              <div className="w-6 h-6">
                <PlayCircleOutline />
              </div>
              <div className="w-6 h-6">
                <RealEstateAgent />
              </div>
              <div className="w-6 h-6">
                <SearchIcon />
              </div>
              <div className="w-6 h-6">
                <Sell />
              </div>
              <div className="w-6 h-6">
                <Shortcut />
              </div>
              <div className="w-6 h-6">
                <Shower />
              </div>
              <div className="w-6 h-6">
                <Twitter />
              </div>
              <div className="w-6 h-6">
                <UserIcon />
              </div>
              <div className="w-6 h-6">
                <WarsaCool />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
