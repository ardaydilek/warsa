import { Sell } from "./icons";

export default function IconInfoContainer({}) {
  return (
    <div className="bg-surface-container-high text-surface-foreground py-10 pl-4 xs:pl-10 md:rounded-4xl flex flex-col lg:flex-row lg:gap-8 gap-4">
      {/* Left */}
      <div className="lg:py-12 flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter">
            Arsa Pazarı
          </h2>
          <p className="font-medium text-sm leading-5 tracking-[0.25px] max-w-lg pr-3 lg:pr-0">
            <b>Warsa</b>, çevrimiçi arazi satın almak ve satmak için
            hedefinizdir. İnşaat alanları, kır evleri, tarım arazileri ve
            rekreasyonel mülklerden oluşan 9 milyon dönümden fazla arazi
            arasından sizin için doğru mülkü bulun.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <h6 className="text-2xl xs:text-4xl font-bold leading-10">350b+</h6>
            <p className="text-sm">Arazi Listeleme</p>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="text-2xl xs:text-4xl font-bold leading-10">100b+</h6>
            <p className="text-sm">Temsilci</p>
          </div>
          <div>
            <h6 className="text-2xl xs:text-4xl font-bold leading-10">1m+</h6>
            <p className="text-sm">Aylık Ziyaretçi</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="icon_info_container py-2 lg:grid lg:grid-cols-2 gap-8 flex w-full overflow-x-auto whitespace-nowrap lg:overflow-x-auto lg:whitespace-normal">
        {/* Icon Container */}
        <div className="flex flex-col py-2 gap-1.5">
          <div className="bg-primary-container w-14 h-14 rounded-full flex items-center justify-center text-surface-on-variant">
            <div className="w-6 h-6">
              <Sell />
            </div>
          </div>
          <h3 className="font-bold leading-6 tracking-[0.5px]">
            Satılık Arazi
          </h3>
          <p className="text-surface-on-variant text-xs font-medium leading-4 tracking-[0.5px]">
            Milyonlarca dönüm satılık arazi <br /> arasından arazi satın alın
          </p>
        </div>

        {/* Icon Container */}
        <div className="flex flex-col py-2 gap-1.5">
          <div className="bg-primary-container w-14 h-14 rounded-full flex items-center justify-center text-surface-on-variant">
            <div className="w-6 h-6">
              <Sell />
            </div>
          </div>
          <h3 className="font-bold leading-6 tracking-[0.5px]">
            Satılık Arazi
          </h3>
          <p className="text-surface-on-variant text-xs font-medium leading-4 tracking-[0.5px]">
            Milyonlarca dönüm satılık arazi <br /> arasından arazi satın alın
          </p>
        </div>

        {/* Icon Container */}
        <div className="flex flex-col py-2 gap-1.5">
          <div className="bg-primary-container w-14 h-14 rounded-full flex items-center justify-center text-surface-on-variant">
            <div className="w-6 h-6">
              <Sell />
            </div>
          </div>
          <h3 className="font-bold leading-6 tracking-[0.5px]">
            Satılık Arazi
          </h3>
          <p className="text-surface-on-variant text-xs font-medium leading-4 tracking-[0.5px]">
            Milyonlarca dönüm satılık arazi <br /> arasından arazi satın alın
          </p>
        </div>

        {/* Icon Container */}
        <div className="flex flex-col py-2 gap-1.5">
          <div className="bg-primary-container w-14 h-14 rounded-full flex items-center justify-center text-surface-on-variant">
            <div className="w-6 h-6">
              <Sell />
            </div>
          </div>
          <h3 className="font-bold leading-6 tracking-[0.5px]">
            Satılık Arazi
          </h3>
          <p className="text-surface-on-variant text-xs font-medium leading-4 tracking-[0.5px]">
            Milyonlarca dönüm satılık arazi <br /> arasından arazi satın alın
          </p>
        </div>
      </div>
    </div>
  );
}
