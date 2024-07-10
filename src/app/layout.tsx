import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Manrope as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navigation from "@/components/layouts/navigation";
import Footer from "@/components/layouts/footer";
import { ModalProvider } from "@/components/providers/modal-provider";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Warsa.",
  description: "Arsa alım/satım platformu. @Warsa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
          <ModalProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
