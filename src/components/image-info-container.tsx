"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { LandCoverImages } from "@/lib/mock-data";
import { Button } from "./ui/button";

export default function ImageInfoContainer() {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // @ts-ignore
      setShowLeftArrow(container.scrollLeft > 0);

      setShowRightArrow(
        // @ts-ignore
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // @ts-ignore
      container.addEventListener("scroll", handleScroll);
      // @ts-ignore
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      // @ts-ignore
      const scrollAmount = container.clientWidth;
      // @ts-ignore
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 bg-surface-container-high py-10 pl-4 text-surface-foreground xs:pl-10 md:rounded-4xl lg:flex-row">
      {/* Left */}
      <div className="flex shrink-0 flex-col justify-center gap-4">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter">
          Popüler Projeler
        </h2>
        <p className="max-w-md text-sm font-medium leading-5">
          Arazili evler, boş araziler, kırsal mülkler, ticari arsalar ve daha{" "}
          <br /> fazlası dahil olmak üzere arazi ve yaşam tarzı
          gayrimenkullerini arayın.
        </p>
        <Button
          className="hidden self-start font-bold lg:block"
          size={"lg"}
        >
          Tamamını Gör
        </Button>
      </div>

      {/* Right */}
      <div className="relative w-full max-w-4xl overflow-hidden">
        {showLeftArrow && (
          <Button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-primary shadow-md hover:text-white"
          >
            <ChevronLeft size={24} />
          </Button>
        )}
        {showRightArrow && (
          <Button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-primary shadow-md hover:text-white"
          >
            <ChevronRight size={24} />
          </Button>
        )}
        <div
          ref={scrollContainerRef}
          className="info_container_right flex w-full snap-x items-center gap-2 overflow-x-scroll scroll-smooth"
        >
          {LandCoverImages.map((image, index) => (
            <div
              className="group flex shrink-0 snap-start scroll-mx-1 flex-col gap-1 pr-1"
              key={`image-${index}`}
            >
              <Link
                className="relative w-64 space-y-1"
                href={`/lands/${image.slug}`}
              >
                <div className="before:bg-gradient-210 relative w-64 before:relative before:z-[1] before:block before:size-[101%] before:rounded-lg before:pt-[100%] before:content-['']">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BUCKET_URL}${image.src}`}
                    alt={image.title}
                    width={500}
                    height={500}
                    className="absolute inset-0 size-full rounded-lg object-cover transition-all duration-300 ease-in-out group-hover:brightness-125"
                    priority
                  />
                </div>
                <p className="text-base font-bold tracking-tight group-hover:underline">
                  {image.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
