import PropertyDetailSlider from "@/components/property/property-detail-slider";
import { Button } from "@/components/ui/button";
import { LandData } from "@/lib/mock-data";
import { Ban, HardDriveDownload, Heart, Save, Share } from "lucide-react";
import { notFound } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const land = LandData.find((item) => item.slug === slug);

  if (!land) notFound();

  const imageArray = land.images.map((l) => {
    return process.env.NEXT_PUBLIC_BUCKET_URL + l;
  });

  return (
    <div className="default-container">
      {/* Header */}
      <div className="flex w-full flex-col justify-between gap-3  md:flex-row md:items-center md:gap-0">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-3xl font-bold leading-10">{land.title}</h1>
          <p className="text-sm font-medium leading-5 text-surface-on-variant">
            {land.location}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Button
              variant={"outline"}
              className="h-9 text-surface-foreground"
            >
              <Share className="mr-2 size-4" />
              Paylas
            </Button>
            <Button
              variant={"outline"}
              className="h-9 text-surface-foreground"
            >
              <Heart className="mr-2 size-4" />
              Kaydet
            </Button>
            <Button
              variant={"outline"}
              className="h-9 text-surface-foreground"
            >
              <Ban className="mr-2 size-4" />
              Gizle
            </Button>
          </div>
          <div className="flex w-full items-center justify-between text-2xl font-bold leading-7 tracking-tight">
            <h2>1.000,00₺</h2>
            <p>
              2,346{" "}
              <span className="text-lg">
                m<sup>²</sup>
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium leading-5 text-surface-on-variant">
            <p>Aktif Satışta</p>
            <div className="size-1 bg-secondary" />
            <p>{land.added_date}</p>
            <div className="size-1 bg-secondary" />
            <p>{(1000000 / 2346).toLocaleString()}₺/m²</p>
          </div>
        </div>
      </div>

      {/* Slider */}
      <section className="relative w-full bg-transparent">
        {imageArray.length > 0 && (
          <div className="relative">
            <PropertyDetailSlider medias={imageArray} />
          </div>
        )}
      </section>

      {/* Description */}
      <section className="flex justify-between gap-2">
        <div className="w-full text-start md:w-2/3">
          <p>{land.description}</p>
        </div>
        <div className="hidden md:block md:w-1/3">
          <div className="rounded-lg bg-surface-container-high p-4 text-start">
            <div className="flex items-center gap-4">
              <Avatar className="bg-surface">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <p>Notus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
