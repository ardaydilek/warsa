import Image from "next/image";
import { Search } from "./ui/search";

export default function Hero({}) {
  return (
    <div className="container z-[1] mt-28 flex flex-col items-center gap-10 text-center text-white">
      <h1 className="block text-4xl font-bold tracking-tight xs:text-6xl md:hidden md:leading-12">
        Elit seçeneklerimiz
        <br /> arasından arsanızı bulun
      </h1>

      <Search
        placeholder="Ankara, TR"
        className="w-full max-w-lg text-primary"
      />
    </div>
  );
}
