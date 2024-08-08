import { LandData } from "@/lib/mock-data";
import PropertiesCard from "./properties-card";

export default function PropertiesCardsContainer({}) {
  return (
    <div className="flex flex-col gap-4 pl-4 text-surface-foreground xs:pl-10">
      <h2 className="text-3xl font-bold leading-tight tracking-tighter">
        Devam Eden Projeler
      </h2>

      <div className="properties_card_container flex snap-x gap-4 overflow-x-auto whitespace-nowrap">
        {LandData.map((item, index) => (
          <PropertiesCard
            key={`properties-card-${index}`}
            className="shrink-0 snap-start scroll-mx-1"
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
    </div>
  );
}
