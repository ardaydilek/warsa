import { Chips } from "@/components/ui/chips";
import ImageInfoContainer from "@/components/image-info-container";
import Hero from "@/components/hero";

import PropertiesCardsContainer from "@/components/properties-cards-container";
import IconInfoContainer from "@/components/icon-info-container";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Chips */}
      <div className="relative mx-auto mt-20 max-w-5xl px-2 py-3 xs:px-8">
        <Chips />
      </div>

      {/* Image Info Container */}
      <div className="mt-20 md:container">
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
