import { LandData } from "@/lib/mock-data";
import PropertiesCard from "./properties-card";

export default function PropertiesCardsContainer({}) {
  return (
    <div className="text-surface-foreground pl-4 xs:pl-10 flex flex-col gap-4">
      <h2 className="text-3xl font-bold leading-tight tracking-tighter">
        Devam Eden Projeler
      </h2>

      <div className="properties_card_container flex gap-4 overflow-x-auto whitespace-nowrap snap-x">
        {LandData.map((item, index) => (
          <PropertiesCard
            key={`properties-card-${index}`}
            className="shrink-0 snap-start scroll-mx-1"
            title={item.title}
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
