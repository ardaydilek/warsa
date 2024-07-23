export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container flex items-center justify-center min-h-[75svh]">
      {children}
    </main>
  );
}
