import Image from "next/image";
import Link from "next/link";

import { Images } from "@/lib/mock-data";
import { Button } from "./ui/button";

export default function ImageInfoContainer({}) {
  return (
    <div className="bg-surface-container-high text-surface-foreground py-10 pl-4 xs:pl-10 md:rounded-4xl flex flex-col lg:flex-row gap-8">
      {/* Left */}
      <div className="flex flex-col gap-4 justify-center shrink-0">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter">
          Sana En Uygun Projeyi Keşfet
        </h2>
        <p
          className="max-w-md
       font-medium text-sm leading-5"
        >
          Arazili evler, boş araziler, kırsal mülkler, ticari arsalar ve daha{" "}
          <br /> fazlası dahil olmak üzere arazi ve yaşam tarzı
          gayrimenkullerini arayın.
        </p>
        <Button
          className="self-start font-bold hidden lg:block"
          size={"lg"}
        >
          Yakınınızda Arazi Bulun
        </Button>
      </div>

      {/* Right */}
      <div className="info_container_right flex gap-2 overflow-x-scroll snap-x items-center max-w-4xl w-full">
        {Images.map((image, index) => (
          <div
            className="flex flex-col gap-1 shrink-0 snap-start scroll-mx-1 group pr-1"
            key={`image-${index}`}
          >
            <Link
              className="w-64 relative space-y-1"
              href={`/`}
            >
              <picture className="w-64 relative before:content-[''] before:block before:pt-[100%] before:relative before:rounded-lg before:bg-gradient-210 before:z-[1] before:w-[101%] before:h-[101%] filter">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="absolute w-full h-full top-0 left-0 rounded-lg object-cover group-hover:brightness-125 transition-all duration-300 ease-in-out"
                />
              </picture>
              <p className="font-bold text-md tracking-tight group-hover:underline">
                {image.text}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
