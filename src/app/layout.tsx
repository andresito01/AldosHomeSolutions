import React from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/ui/NavbarMenu";
import { Meteors } from "@/components/ui/meteors";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Aldo's Home Solution",
  description:
    "Professional handymen providing reliable repair and maintenance solutions for your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={cn(
            "flex min-h-screen flex-col items-center justify-between dark:bg-white bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]  font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="w-full top-0">
            <Navbar className="top-0" />
          </div>

          <main className="relative overflow-hidden w-full">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
