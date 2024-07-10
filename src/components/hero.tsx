import { Search } from "./ui/search";

export default function Hero({}) {
  return (
    <div className="container mt-28 flex flex-col items-center text-center gap-10 text-surface-foreground">
      <h1 className="font-bold text-4xl xs:text-6xl md:leading-12 tracking-tight">
        Elit seçeneklerimiz
        <br /> arasından arsanızı bulun
      </h1>

      <Search
        placeholder="Ankara, TR"
        className="max-w-lg w-full"
      />
    </div>
  );
}
