"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { WarsaCool } from "./icons";
import { TypewriterEffectSmooth } from "./animations/typewriter";

export function FeatureSection() {
  const words = [
    {
      text: "Warsa",
      className: "text-primary",
    },
    {
      text: "Yoksa",
    },
    {
      text: "Arsa",
    },
  ];

  const features = [
    {
      title: "Proje Bedeli Ödemeyin",
      description:
        "Tapulu arsanızda kendi projenizi inşaa edin. Fazladan proje bedeli ödemeyin.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-surface-container-high",
    },
    {
      title: "Amaç Ve Pozitif Etki",
      description:
        "Ekolojik, sosyolojik ve ekonomik anlamda sürdürülebilir bütüncül bir yaşamı hedefliyoruz ve projelerimizi bu doğrultuda hazırlıyoruz.",
      skeleton: <SkeletonTwo />,
      className:
        "border-b col-span-1 lg:col-span-2 border-surface-container-high",
    },
    {
      title: "Yatırım Danışmanlığı",
      description:
        "Yatırımlarınızı en doğru zamanda, en doğru lokasyonda ve en doğru fiyatla yapabilmeniz adına profesyonel danışmanlık hizmeti sunuyoruz.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  border-surface-container-high",
    },
    {
      title: "Hayalinizdeki Yere Kavuşun",
      description:
        "Warsa ile hayalinizdeki şehirden arsa alım satımı yaparak, arsa alımınızı en doğru zamanda, en doğru lokasyonda ve en doğru fiyatla yapabileceksiniz.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20">
      <div className="px-8 flex flex-col items-center gap-4">
        {/* <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-surface-foreground md:hidden">
          Adım Adım Ev Sahibi Olun
        </h4> */}

        <TypewriterEffectSmooth
          words={words}
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl  tracking-tight font-medium text-surface-foreground"
        />

        <p className="text-sm lg:text-base  max-w-2xl text-surface-on-variant text-center font-normal">
          Küçük bütçelerle bile; Türkiye&apos;nin en değerli lokasyonlarında,
          altyapısı hazır, sosyal alanlarla zenginleştirilmiş imarlı arsalarda
          tapu sahibi olabilirsiniz. Eko arsa, devre tatil, markalı arsa ve
          anahtar teslim projeler ile ayrıcalıklı yaşam ile tanışın.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-surface-container-high">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              className={feature.className}
            >
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-foreground text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-foreground text-center font-normal",
        "text-left max-w-lg mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-surface dark:shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-[400px] flex-col space-y-2">
          <Image
            src={`${process.env.NEXT_PUBLIC_BUCKET_URL}/master-villa/2.jpg`}
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-48 dark:h-60 bg-gradient-to-t from-surface via-surface to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-48 dark:h-60 bg-gradient-to-b from-surface via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    `${process.env.NEXT_PUBLIC_BUCKET_URL}/arsavev-dikili/1.jpg`,
    `${process.env.NEXT_PUBLIC_BUCKET_URL}/arsavev-edirne/1.jpg`,
    `${process.env.NEXT_PUBLIC_BUCKET_URL}/arsavev-foca/1.jpg`,
    `${process.env.NEXT_PUBLIC_BUCKET_URL}/arsavev-yalova/1.jpg`,
    `${process.env.NEXT_PUBLIC_BUCKET_URL}/master-kandira-koy-evleri/1.jpg`,
    `${process.env.NEXT_PUBLIC_BUCKET_URL}/master-villa/1.jpg`,
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-surface border border-surface-container-high flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="Warsa"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-surface border border-surface-container-high flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-surface to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-surface  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="/"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto group h-full">
        <div className="flex flex-1 w-full flex-col relative bg-primary-on-container rounded-md">
          <div className="mx-auto blur-none group-hover/image:blur-md transition-all duration-200">
            <WarsaCool />
          </div>
        </div>
      </div>
    </Link>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <Globe className="absolute -right-20 md:-right-40 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude

        { location: [39.94222798274764, 32.844465147456944], size: 0.03 },
        { location: [41.01296708956255, 28.940493040248008], size: 0.05 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
