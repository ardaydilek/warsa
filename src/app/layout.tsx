import { ClerkProvider } from "@clerk/nextjs";
import { trTR } from "@/lib/localization";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Manrope as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navigation from "@/components/layouts/navigation";
import Footer from "@/components/layouts/footer";

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
    <ClerkProvider
      localization={trTR}
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
        },
        elements: {
          formButtonPrimary:
            "bg-primary text-primary-foreground border-none shadow-none hover:bg-primary/90",
          formActionLink: "text-primary",
        },
      }}
    >
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
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
