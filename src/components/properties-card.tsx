"use client";
import React from "react";
import Link from "next/link";
import { Info } from "@/components/icons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

export default function PropertiesCard({ className }: { className?: any }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Link
      className={cn(
        "w-80 relative bg-surface-container rounded-lg overflow-hidden pb-4 group/link space-y-4",
        className
      )}
      href={`/`}
    >
      <Carousel
        className="group/carousel relative"
        setApi={setApi}
      >
        <div
          className="absolute top-2 right-2 z-[1]"
          onClick={(e) => e.preventDefault()}
        >
          <Heart className="w-6 h-6 text-white hover:text-error" />
        </div>
        <CarouselContent className="!ml-0">
          <CarouselItem className="relative pt-[65%]">
            <Image
              src={"https://picsum.photos/400/400"}
              alt={"alt"}
              width={400}
              height={400}
              className="absolute w-full h-full top-0 left-0 object-cover group-hover:brightness-125 transition-all duration-300 ease-in-out"
            />
          </CarouselItem>
          <CarouselItem className="relative pt-[65%]">
            <Image
              src={"https://picsum.photos/400/400"}
              alt={"alt"}
              width={400}
              height={400}
              className="absolute w-full h-full top-0 left-0 object-cover group-hover:brightness-125 transition-all duration-300 ease-in-out"
            />
          </CarouselItem>
          <CarouselItem className="relative pt-[65%]">
            <Image
              src={"https://picsum.photos/400/400"}
              alt={"alt"}
              width={400}
              height={400}
              className="absolute w-full h-full top-0 left-0 object-cover group-hover:brightness-125 transition-all duration-300 ease-in-out"
            />
          </CarouselItem>
        </CarouselContent>
        <div
          className="absolute bottom-2 right-0 flex justify-center items-center w-full text-white"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <CarouselPrevious className="bg-transparent border-none lg:hidden lg:group-hover/carousel:flex" />
          <p
            className={cn(
              "text-sm tracking-[0.1px] font-medium",
              current === 1 ? "block" : "hidden"
            )}
          >
            5 gün önce
          </p>
          <p
            className={cn(
              "text-sm tracking-[0.1px] font-medium",
              current !== 1 ? "block" : "hidden"
            )}
          >
            {current}/{count}
          </p>
          <CarouselNext className="bg-transparent border-none lg:hidden lg:group-hover/carousel:flex" />
        </div>
      </Carousel>

      <div className="flex flex-col gap-1 px-4 group/card">
        <div className="flex gap-6 group-hover/card:text-primary transition-colors duration-100 ease-in-out">
          <h3 className="text-lg font-bold tracking-tight leading-5">
            1.500.000₺
          </h3>
          <h3 className="text-lg font-bold tracking-[-0.5px] leading-5">
            1.000 m²
          </h3>
        </div>
        <h4 className="text-surface-foreground tracking-[-0.5px]">Ankara</h4>
      </div>

      <div className="flex justify-between px-4 items-center pt-4">
        <h5 className="text-sm font-bold tracking-[0.1px]">Bilkent, 06510</h5>

        <div className="w-6 h-6 text-surface-on-variant hover:text-primary transition-colors duration-100 ease-in-out z-20">
          <Info />
        </div>
      </div>
    </Link>
  );
}
