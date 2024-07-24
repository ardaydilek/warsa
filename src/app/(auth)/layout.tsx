export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container flex min-h-[75svh] items-center justify-center">
      {children}
    </main>
  );
}
