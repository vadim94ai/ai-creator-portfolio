"use client";

import { motion } from "framer-motion";

const projects = [
  {
    titleLeft: "Watch",
    titleRight: "Aura Fashion",
    caption: "featuring AI Generation",
    videoSrc: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
  },
  {
    titleLeft: "Explore",
    titleRight: "Neuroscape",
    caption: "generative environment series",
    videoSrc: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
  }
];

function VideoContainer({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-24 group cursor-pointer"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={project.videoSrc}
      />
      
      {/* Тёмный оверлей для читаемости текста */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />

      {/* 9-dot cluster loading/play placeholder in center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <div className="grid grid-cols-3 gap-1 w-6 h-6 group-hover:scale-110 transition-transform duration-700">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full bg-white ${i === 4 ? 'bg-transparent' : ''}`} />
          ))}
        </div>
      </div>

      {/* Split Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16 pointer-events-none">
        <span className="text-white text-[28px] md:text-[38px] font-light tracking-tight">{project.titleLeft}</span>
        
        {/* Play Triangle between text */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute left-1/2 -translate-x-1/2">
          <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
        </svg>

        <span className="text-white text-[28px] md:text-[38px] font-light tracking-tight">{project.titleRight}</span>
      </div>

      {/* Small Caption */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <span className="text-white/80 text-[14px] uppercase tracking-widest">{project.caption}</span>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section className="w-full pb-16 px-4 bg-linen-canvas">
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <h2 className="text-[15px] font-medium uppercase text-ink-black mb-4">Избранные работы</h2>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <VideoContainer key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
