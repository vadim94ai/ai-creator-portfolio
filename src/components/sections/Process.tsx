"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Концепт & Идея", desc: "Анализируем задачу и создаем референсные мудборды." },
  { num: "02", title: "Промпт-инжиниринг", desc: "Подбираем идеальные текстовые запросы." },
  { num: "03", title: "Анимация & Рендер", desc: "Оживляем статику, настраиваем физику движения и свет." },
  { num: "04", title: "Постпродакшн", desc: "Финальная сборка, визуальные эффекты и цветокоррекция." },
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="process" className="bg-linen-canvas w-full">
      {/* MOBILE LAYOUT (Vertical) */}
      <div className="md:hidden py-16 px-4">
        <h2 className="text-[14px] font-medium uppercase text-ink-black mb-4">Как я работаю</h2>
        <h3 className="text-[44px] font-light tracking-[-0.03em] text-ink-black mb-12 leading-tight">Процесс создания</h3>
        
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              key={index} 
              className="p-8 rounded-2xl bg-paper-white flex flex-col gap-6"
            >
              <span className="text-[48px] font-light text-stone/20 leading-none">
                {step.num}
              </span>
              <div>
                <h4 className="text-[24px] font-light mb-2 text-ink-black tracking-tight">{step.title}</h4>
                <p className="text-[15px] text-stone leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT (Sticky Horizontal Scroll) */}
      <div ref={targetRef} className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-[1280px] w-full mx-auto px-4 absolute left-0 right-0 top-32 z-10">
             <h2 className="text-[15px] font-medium uppercase text-ink-black mb-4">Как я работаю</h2>
             <h3 className="text-[58px] font-light tracking-[-0.03em] text-ink-black">Процесс создания</h3>
          </div>

          <motion.div style={{ x }} className="flex gap-6 px-20 mt-32 w-[400vw]">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="w-[100vw] max-w-[800px] flex-shrink-0 relative"
              >
                <div className="p-16 rounded-2xl bg-paper-white h-[400px] flex flex-col justify-between">
                  <span className="text-[58px] font-light text-stone/20 leading-none">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-[33px] font-light mb-4 text-ink-black tracking-tight">{step.title}</h4>
                    <p className="text-[16px] text-stone leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
