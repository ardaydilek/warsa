import PropertiesCard from "./properties-card";

export default function PropertiesCardsContainer({}) {
  return (
    <div className="text-surface-foreground pl-4 xs:pl-10 flex flex-col gap-4">
      <h2 className="text-3xl font-bold leading-tight tracking-tighter">
        Yakınındaki Araziler
      </h2>

      <div className="properties_card_container flex gap-4 overflow-x-auto whitespace-nowrap snap-x">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <PropertiesCard
              key={`properties-card-${index}`}
              className="shrink-0 snap-start scroll-mx-1"
            />
          ))}
      </div>
    </div>
  );
}
