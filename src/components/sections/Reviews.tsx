"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "Невероятный уровень детализации. Видео выглядят так, будто их снимали на RED в Голливуде.",
    author: "Михаил В.",
    role: "Creative Director"
  },
  {
    text: "Работа с ИИ на стыке магии и технологий. Процесс был прозрачным, а результат превзошел все ожидания.",
    author: "Анна С.",
    role: "Founder & CEO"
  },
  {
    text: "Лучший опыт взаимодействия. Дизайн получился чистым, минималистичным и с шикарными микро-анимациями.",
    author: "Денис Р.",
    role: "Tech Lead"
  },
  {
    text: "Уникальное видение арт-дирекшна. Смесь 3D, генеративного арта и классического графического дизайна.",
    author: "Елена К.",
    role: "Marketing Head"
  }
];

const duplicatedReviews = [...reviews, ...reviews];

export default function Reviews() {
  return (
    <section className="w-full py-24 md:py-32 bg-linen-canvas overflow-hidden relative">
      <div className="max-w-[1280px] w-full mx-auto px-4 mb-16">
         <h2 className="text-[15px] font-medium uppercase text-ink-black mb-4">Отзывы</h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Градиентные маски цвета Linen Canvas */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-linen-canvas to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-linen-canvas to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Очень плавный медленный ход
          }}
          className="flex gap-6 px-6"
        >
          {duplicatedReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[320px] md:w-[400px] flex-shrink-0 p-8 rounded-2xl bg-paper-white flex flex-col justify-between"
            >
              <p className="text-[16px] text-ink-black leading-relaxed mb-8">"{review.text}"</p>
              <div className="flex flex-col">
                <h4 className="font-medium text-ink-black text-[16px]">{review.author}</h4>
                <span className="text-[14px] text-stone">{review.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
