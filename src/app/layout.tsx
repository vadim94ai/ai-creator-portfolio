import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Nav from "@/components/Nav";
import Analytics from "@/components/Analytics";

const fraunces = Fraunces({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cosmos-creator.vercel.app'),
  title: "Cosmos | Gallery wall for visual discovery",
  description: "Портфолио ИИ-креатора. Генеративный арт, видео и визуальные исследования.",
  openGraph: {
    title: "Cosmos | AI Creator Portfolio",
    description: "Портфолио ИИ-креатора. Генеративный арт, видео и визуальные исследования.",
    url: 'https://cosmos-creator.vercel.app',
    siteName: 'Cosmos',
    images: [
      {
        url: '/og-image.jpg', // Плейсхолдер картинки 1200х630
        width: 1200,
        height: 630,
        alt: 'Cosmos Portfolio',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cosmos | AI Creator Portfolio",
    description: "Портфолио ИИ-креатора.",
    images: ['/og-image.jpg'],
  },
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
          <Analytics />
          <Nav />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
