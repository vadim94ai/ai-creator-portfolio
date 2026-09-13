"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 bg-paper-white rounded-2xl">
      <motion.span className="text-[58px] font-light text-ink-black tracking-[-0.05em] leading-[1]">
        <AnimatedNumber value={isInView ? value : 0} />
      </motion.span>
      <span className="mt-2 text-[14px] text-stone">{label}</span>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("ru-RU").format(Math.round(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function About() {
  const text = "Я создаю визуальные миры на стыке искусства и технологий. Используя генеративные сети, я помогаю брендам говорить на языке будущего.";
  const words = text.split(" ");

  return (
    <section className="relative w-full py-24 md:py-32 px-4 bg-linen-canvas overflow-hidden flex flex-col items-center">
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="mb-24 max-w-4xl"
        >
          <h2 className="text-[15px] text-ink-black font-medium tracking-normal uppercase mb-8">Обо мне</h2>
          <p className="text-[33px] md:text-[38px] font-light text-ink-black leading-[1.2] tracking-[-0.02em]">
            Я создаю визуальные миры на стыке искусства и технологий. Используя генеративные сети, я помогаю брендам говорить на языке будущего.
          </p>
        </motion.div>

        {/* Counters in flat Paper White cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Counter value={50} label="Проектов" />
          <Counter value={5} label="Лет опыта" />
          <Counter value={100} label="Довольных клиентов" />
        </div>
      </div>
    </section>
  );
}
