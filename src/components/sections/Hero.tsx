"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

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
      <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] w-[90px] md:w-[180px] aspect-[3/4] rounded-xl overflow-hidden rotate-[-4deg]">
        <video autoPlay muted loop playsInline poster="https://images.pexels.com/photos/3129957/pexels-photo-3129957.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" />
      </motion.div>
      
      {/* Скрываем часть видео на мобильных для экономии трафика и места */}
      <motion.div style={{ y: y2 }} className="hidden md:block absolute top-[20%] right-[12%] w-[140px] aspect-square rounded-xl overflow-hidden rotate-[3deg]">
        <video autoPlay muted loop playsInline poster="https://images.pexels.com/photos/853889/pexels-photo-853889.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" />
      </motion.div>
      
      <motion.div style={{ y: y3 }} className="absolute bottom-[10%] left-[5%] md:bottom-[20%] md:left-[15%] w-[110px] md:w-[200px] aspect-video rounded-xl overflow-hidden rotate-[2deg]">
        <video autoPlay muted loop playsInline poster="https://images.pexels.com/photos/3163534/pexels-photo-3163534.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" />
      </motion.div>

      <motion.div style={{ y: y4 }} className="hidden md:block absolute bottom-[15%] right-[10%] w-[160px] aspect-[4/5] rounded-xl overflow-hidden rotate-[-2deg]">
        <video autoPlay muted loop playsInline poster="https://images.pexels.com/photos/3129671/pexels-photo-3129671.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" />
      </motion.div>

      {/* Center Copy */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mt-12">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="text-[14px] md:text-[15px] font-medium tracking-normal text-ink-black uppercase mb-4 md:mb-6"
        >
          COSMOS
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="text-[44px] font-serif leading-[0.9] md:text-[74px] font-light text-ink-black md:leading-[0.8] tracking-[-0.05em] mb-8 md:mb-12"
        >
          Gallery wall for <br/> visual discovery
        </motion.h1>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto"
        >
          <a 
            href="#portfolio"
            className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-ink-black text-paper-white rounded-2xl font-medium text-[15px] hover:bg-stone hover:scale-[0.98] active:scale-[0.95] transition-all duration-500 text-center"
          >
            Смотреть работы
          </a>
        </motion.div>
      </div>
    </section>
  );
}
