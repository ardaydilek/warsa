import { IconInfoContainerData } from "@/lib/mock-data";
import { Sell } from "./icons";

export default function IconInfoContainer({}) {
  return (
    <div className="flex flex-col gap-4 bg-surface-container-high py-10 pl-4 text-surface-foreground xs:pl-10 md:rounded-4xl lg:flex-row lg:gap-8">
      {/* Left */}
      <div className="flex w-full flex-col gap-10 lg:py-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter">
            Arsa Pazarı
          </h2>
          <p className="max-w-lg pr-3 text-sm font-medium leading-5 tracking-[0.25px] lg:pr-0">
            Nakdiniz; enflasyon değerlerinin altında kalan banka faizleriyle,
            temettü oranları öngörülemeyen borsayla, yükselen borsa faizleriyle,
            düşüşe geçmesi beklenen emlak yatırımlarıyla ve bu gibi bir çok
            yatırım araçlarıyla erimesin. <br />
            <b>Warsa</b>, hayalinizdeki evi hayalinizde yatırıma dönüştürüyor.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <h6 className="text-2xl font-bold leading-10 xs:text-4xl">10+</h6>
            <p className="text-sm">Arazi Listeleme</p>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="text-2xl font-bold leading-10 xs:text-4xl">10+</h6>
            <p className="text-sm">Temsilci</p>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="text-2xl font-bold leading-10 xs:text-4xl">150b+</h6>
            <p className="text-sm">Aylık Ziyaretçi</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="icon_info_container flex w-full gap-8 overflow-x-auto whitespace-nowrap py-2 lg:grid lg:grid-cols-2 lg:overflow-x-auto lg:whitespace-normal">
        {/* Icon Container */}
        {IconInfoContainerData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`icon-info-container-${index}`}
              className="flex flex-col gap-1.5 py-2"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-primary-container text-surface-on-variant">
                <div className="size-6">
                  <Icon />
                </div>
              </div>

              <h3 className="font-bold leading-6 tracking-[0.5px]">
                {item.title}
              </h3>
              <p className="text-xs font-medium leading-4 tracking-[0.5px] text-surface-on-variant">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
