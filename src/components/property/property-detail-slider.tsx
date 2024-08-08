"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Thumbs, Pagination, Mousewheel } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import { ChevronDown, Expand, ExpandIcon, Maximize } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import NextJsImage from "@/components/next-image";

import Image from "next/image";

export default function PropertyDetailSlider({ medias }: { medias: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const slides = medias.map((src: string) => {
    return { src };
  });

  return (
    <div className="relative flex w-full flex-col md:flex-row">
      <div className="mb-4 w-full pr-0 md:mb-0 md:w-3/4 md:pr-4">
        <Swiper
          spaceBetween={10}
          navigation={true}
          pagination={{
            type: "fraction",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Navigation, Thumbs, Pagination]}
          className="relative overflow-hidden rounded-md md:h-[610px]"
          onSwiper={(swiper: SwiperType) => setMainSwiper(swiper)}
          onSlideChange={(swiper: SwiperType) =>
            setPhotoIndex(swiper.activeIndex)
          }
        >
          {medias.map((src: string, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className="group relative w-full overflow-hidden rounded-md pt-[56.25%]"
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="inset-0 size-full rounded-md object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  loading="eager"
                />
              </SwiperSlide>
            );
          })}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute right-4 top-4 z-10 rounded-full bg-primary/50 p-2 text-white"
          >
            <Maximize size={24} />
          </button>
        </Swiper>
      </div>
      {/* Thumbnails */}
      <div className="relative h-28 w-full md:h-[610px] md:w-1/4">
        <Swiper
          onSwiper={(swiper: SwiperType) => setThumbsSwiper(swiper)}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Thumbs, Mousewheel]}
          direction="horizontal"
          mousewheel={true}
          breakpoints={{
            768: {
              direction: "vertical",
              slidesPerView: 3,
            },
          }}
          className="h-20 sm:h-full"
        >
          {medias.map((media: string, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={media}
                  alt={`Thumbnail ${index + 1}`}
                  className="size-full cursor-pointer rounded-md object-cover"
                  // onClick={() =>  mainSwiper?.slideTo(index)}
                  width={1920}
                  height={1080}
                  loading="eager"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          ref={nextRef}
          className="absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 cursor-pointer rounded-full bg-slate-700/50 p-2 text-white md:bottom-2 md:left-1/2 md:block"
          onClick={() => thumbsSwiper?.slideNext()}
        >
          <ChevronDown className="hidden md:block" />
          <ChevronDown className="md:hidden" />
        </div>
      </div>
      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        render={{ slide: NextJsImage }}
        close={() => setIsOpen(false)}
        slides={slides.map((slide: { src: string }) => {
          return slide;
        })}
        plugins={[Thumbnails, Zoom, Counter, Video]}
        index={photoIndex}
        on={{
          view: ({ index }: { index: number }) => {
            setPhotoIndex(index);
            mainSwiper?.slideTo(index);
          },
        }}
      />
    </div>
  );
}
