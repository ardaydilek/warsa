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

export default function PropertiesCard({
  className,
  images,
  title,
  description,
  social_areas,
  status,
  slug,
  location,
  added_date,
  total_project_area,
}: {
  className?: any;
  images: string[];
  title: string;
  description: string;
  social_areas: string[];
  status: string;
  slug: string;
  location: string;
  added_date: string;
  total_project_area?: string;
}) {
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
        "w-96 relative bg-surface-container rounded-lg overflow-hidden pb-4 group/link flex flex-col gap-4",
        className
      )}
      href={`/lands/${slug}`}
    >
      <Carousel
        className="group/carousel relative"
        setApi={setApi}
      >
        <div
          className="absolute right-2 top-2 z-[1]"
          onClick={(e) => e.preventDefault()}
        >
          <Heart className="size-6 text-white hover:text-error" />
        </div>
        <CarouselContent className="!ml-0">
          {images.map((image, index) => (
            <CarouselItem
              className="relative pt-[65%]"
              key={`carousel-item-${index}`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BUCKET_URL}${image}`}
                alt={`${title}-${index}`}
                width={400}
                height={400}
                className="absolute left-0 top-0 size-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-125"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className="absolute bottom-2 right-0 flex w-full items-center justify-center text-white"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <CarouselPrevious className="border-none bg-transparent lg:hidden lg:group-hover/carousel:flex" />
          <p
            className={cn(
              "text-sm tracking-[0.1px] font-medium",
              current === 1 ? "block" : "hidden"
            )}
          >
            {added_date}
          </p>
          <p
            className={cn(
              "text-sm tracking-[0.1px] font-medium",
              current !== 1 ? "block" : "hidden"
            )}
          >
            {current}/{count}
          </p>
          <CarouselNext className="border-none bg-transparent lg:hidden lg:group-hover/carousel:flex" />
        </div>
      </Carousel>

      <div className="group/card flex flex-col gap-1 px-4">
        <div className="flex gap-6 transition-colors duration-100 ease-in-out group-hover/card:text-primary">
          <h3 className="text-lg font-bold leading-5 tracking-tight">
            1.500.000₺
          </h3>
          <h3 className="text-lg font-bold leading-5 tracking-[-0.5px]">
            {total_project_area}
          </h3>
        </div>
        <h4 className="tracking-[-0.5px] text-surface-foreground">
          {location}
        </h4>
      </div>

      <div className="mt-auto flex items-center justify-between px-4 pt-4">
        <h5 className="text-sm font-bold tracking-[0.1px]">
          {location.split("-")[0]}, 06510
        </h5>

        <div className="z-20 size-6 text-surface-on-variant transition-colors duration-100 ease-in-out hover:text-primary">
          <Info />
        </div>
      </div>
    </Link>
  );
}
