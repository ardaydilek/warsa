import { Chips } from "@/components/ui/chips";
import ImageInfoContainer from "@/components/image-info-container";
import Hero from "@/components/hero";

import PropertiesCardsContainer from "@/components/properties-cards-container";
import IconInfoContainer from "@/components/icon-info-container";
import Image from "next/image";

export default async function Home() {
  return (
    <main className=" min-h-screen">
      <div className="relative -top-14 py-24">
        <div className="after:bg-gradient-210 w-full overflow-hidden rounded-md rounded-b-lg pb-[10%] after:absolute after:inset-0 after:z-[-1]">
          <Image
            src="/hero2.jpeg"
            alt="hero"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-[-1] size-full rounded-b-lg object-cover"
          />
        </div>

        {/* Hero */}
        <Hero />

        {/* Chips */}
        <div className="relative mx-auto mt-20 max-w-5xl px-2 py-3 xs:px-8">
          <Chips />
        </div>
      </div>

      {/* Image Info Container */}
      <div className="mt-10 md:container">
        <ImageInfoContainer />
      </div>

      {/* Nearby Lands */}
      <div className="mt-20 md:container">
        <PropertiesCardsContainer />
      </div>

      {/* Icon Info Container */}
      <div className="my-32 md:container">
        <IconInfoContainer />
      </div>
    </main>
  );
}
