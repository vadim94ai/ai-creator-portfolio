"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    titleLeft: "Watch",
    titleRight: "Aura Fashion",
    caption: "featuring AI Generation",
    videoSrc: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
    poster: "https://images.pexels.com/photos/3129957/pexels-photo-3129957.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    titleLeft: "Explore",
    titleRight: "Neuroscape",
    caption: "generative environment series",
    videoSrc: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
    poster: "https://images.pexels.com/photos/853889/pexels-photo-853889.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

function VideoContainer({ project, index }: { project: typeof projects[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 md:mb-24 group cursor-pointer"
      onMouseEnter={() => {
        if (window.innerWidth >= 768) {
          videoRef.current?.play();
          setIsPlaying(true);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768) {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      }}
      onClick={() => {
        if (window.innerWidth < 768) {
          togglePlay();
        }
      }}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={project.poster}
        className="absolute inset-0 w-full h-full object-cover"
        src={project.videoSrc}
      />
      
      {/* Тёмный оверлей */}
      <div className={`absolute inset-0 bg-black/30 md:bg-black/20 transition-colors duration-700 ${isPlaying ? 'md:bg-black/10 bg-black/10' : ''}`} />

      {/* 9-dot cluster */}
      <div className={`absolute inset-0 flex items-center justify-center opacity-80 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="grid grid-cols-3 gap-1 w-6 h-6 md:group-hover:scale-110 transition-transform duration-700">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full bg-white ${i === 4 ? 'bg-transparent' : ''}`} />
          ))}
        </div>
      </div>

      {/* Split Text Overlay */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between p-8 md:px-16 pointer-events-none">
        <span className="text-white text-[24px] md:text-[38px] font-light tracking-tight md:mb-0 mb-2">{project.titleLeft}</span>
        
        {/* Play Triangle */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-white transition-opacity duration-500 md:absolute md:left-1/2 md:-translate-x-1/2 ${isPlaying ? 'opacity-0' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100'}`}>
          <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
        </svg>

        <span className="text-white text-[24px] md:text-[38px] font-light tracking-tight mt-2 md:mt-0 text-center">{project.titleRight}</span>
      </div>

      {/* Small Caption */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center">
        <span className="text-white/80 text-[12px] md:text-[14px] uppercase tracking-widest">{project.caption}</span>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section className="w-full pb-8 md:pb-16 px-4 bg-linen-canvas">
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-[14px] md:text-[15px] font-medium uppercase text-ink-black mb-4">Избранные работы</h2>
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
