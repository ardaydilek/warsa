import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Link href="/brand/color-palette">Brand</Link>
    </main>
  );
}
