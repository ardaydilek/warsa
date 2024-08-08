import PropertiesCard from "@/components/properties-card";
import PropertiesFilter from "@/components/property/properties-filter";
import PropertiesMap from "@/components/property/maps/properties-map";
import { LandData } from "@/lib/mock-data";
import PropertiesMapReact from "@/components/property/maps/properties-map-react";

export default function Page() {
  return (
    <main className="flex min-h-screen justify-between gap-6">
      <section className="sticky top-16  hidden h-screen w-1/2 overflow-hidden rounded-r-lg md:block">
        {/* <PropertiesMap
          properties={LandData.map((item) => ({
            ...item,
            imageUrl: `https://cdn.notuscreative.com/warsa-static-lands${item.images[0]}`,
          }))}
          initialViewState={{
            lat: 39.746,
            long: 26.88587459648408,
            zoom: 5,
          }}
        /> */}
        <PropertiesMapReact
          properties={LandData.map((item) => ({
            ...item,
            price: 1000000,
            acres: 55,
            coordinates: [item.longitude, item.latitude],
            imageUrl: `https://cdn.notuscreative.com/warsa-static-lands${item.images[0]}`,
          }))}
          initialViewState={{
            latitude: 41.01043509315622,
            longitude: 28.99319335379383,
            zoom: 5,
          }}
        />
      </section>

      <section className="flex w-full flex-col gap-4  px-4 pt-6 md:w-2/3 md:pr-6 md:pt-0">
        <h1 className="text-2xl font-bold tracking-tight xs:text-3xl md:leading-10">
          Yakınındaki Araziler
        </h1>

        <div>
          <PropertiesFilter />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {LandData.map((item, index) => (
            <PropertiesCard
              key={`properties-card-${index}`}
              className={"w-auto"}
              title={item.title}
              slug={item.slug}
              description={item.description}
              images={item.images}
              social_areas={item.social_areas}
              total_project_area={item.total_project_area}
              status={item.status}
              added_date={item.added_date}
              location={item.location}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
