"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Мягкий параллакс для "полароидов"
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-linen-canvas"
    >
      {/* Floating Image Tiles (Полароиды) */}
      <motion.div style={{ y: y1 }} className="absolute top-[15%] left-[10%] w-[120px] md:w-[180px] aspect-[3/4] rounded-xl overflow-hidden rotate-[-4deg]">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" />
      </motion.div>
      
      <motion.div style={{ y: y2 }} className="absolute top-[20%] right-[12%] w-[100px] md:w-[140px] aspect-square rounded-xl overflow-hidden rotate-[3deg]">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" />
      </motion.div>
      
      <motion.div style={{ y: y3 }} className="absolute bottom-[20%] left-[15%] w-[140px] md:w-[200px] aspect-video rounded-xl overflow-hidden rotate-[2deg]">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" />
      </motion.div>

      <motion.div style={{ y: y4 }} className="absolute bottom-[15%] right-[10%] w-[110px] md:w-[160px] aspect-[4/5] rounded-xl overflow-hidden rotate-[-2deg]">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" />
      </motion.div>

      {/* Center Copy */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mt-12">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="text-[15px] font-medium tracking-normal text-ink-black uppercase mb-6"
        >
          COSMOS
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="text-[58px] md:text-[74px] font-light text-ink-black leading-[0.8] tracking-[-0.05em] mb-12"
        >
          Gallery wall for <br/> visual discovery
        </motion.h1>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center gap-4"
        >
          <button className="px-6 py-4 bg-ink-black text-paper-white rounded-2xl font-medium text-[16px] hover:bg-stone transition-colors duration-300">
            Sign up
          </button>
          <button className="px-6 py-4 bg-paper-white text-ink-black rounded-2xl font-medium text-[16px] border border-ink-black/15 hover:border-ink-black/30 transition-colors duration-300">
            Login
          </button>
        </motion.div>
      </div>
    </section>
  );
}
