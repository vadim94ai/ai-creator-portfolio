import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const fraunces = Fraunces({ 
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"], // 300 simulates the 350 whisper-weight
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
          {/* Навигация (Nav Pill) согласно референсу */}
          <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-paper-white px-6 py-3 rounded-full flex items-center gap-8 border border-ink-black/10">
            <div className="flex items-center gap-1">
              {/* Dot Cluster Logo */}
              <div className="grid grid-cols-3 gap-0.5 w-[18px] h-[18px]">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 4 ? 'bg-transparent' : 'bg-ink-black'}`} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-6 text-[16px] font-medium text-stone">
              <a href="#" className="hover:text-ink-black transition-colors">Projects</a>
              <a href="#" className="hover:text-ink-black transition-colors">Process</a>
            </div>
          </nav>
          
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
