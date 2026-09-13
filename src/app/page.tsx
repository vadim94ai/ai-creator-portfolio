import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-linen-canvas">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Reviews />
      <Contact />
    </main>
  );
}
