import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Nav from "@/components/Nav";

const fraunces = Fraunces({ 
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cosmos | Portfolio",
  description: "Gallery wall for visual discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${fraunces.className} bg-linen-canvas text-ink-black antialiased overflow-x-hidden selection:bg-stone/20 selection:text-ink-black`}>
        <LenisProvider>
          <Nav />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
