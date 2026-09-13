"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "ИИ Генерация Контента",
    image: "https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Motion & Видео",
    image: "https://images.pexels.com/photos/3129957/pexels-photo-3129957.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Креативный Код",
    image: "https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group relative flex flex-col cursor-pointer"
    >
      {/* Flat image edge-to-edge with 16px radius, no shadow */}
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-paper-white">
        <motion.img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>
      
      {/* Label under image */}
      <h3 className="text-[18px] font-normal text-ink-black tracking-[-0.01em]">
        {service.title}
      </h3>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="w-full pb-24 md:pb-32 px-4 bg-linen-canvas relative">
      <div className="max-w-[1280px] w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <h2 className="text-[15px] font-medium uppercase text-ink-black mb-4">Услуги & Навыки</h2>
        </motion.div>

        {/* 3-column grid card as per reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
