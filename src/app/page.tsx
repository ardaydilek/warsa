import { Chips } from "@/components/ui/chips";
import ImageInfoContainer from "@/components/image-info-container";
import Hero from "@/components/hero";

import PropertiesCardsContainer from "@/components/properties-cards-container";
import IconInfoContainer from "@/components/icon-info-container";
import { FeatureSection } from "@/components/feature-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Chips */}
      {/* <div className="max-w-5xl mx-auto py-3 mt-20 px-2 xs:px-8 relative">
        <Chips />
      </div> */}

      {/* Image Info Container */}
      <div className="mt-20 md:container">
        <ImageInfoContainer />
      </div>

      {/* Feature Section */}
      <div className="mt-32 md:container">
        <FeatureSection />
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
