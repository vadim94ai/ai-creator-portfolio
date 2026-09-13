"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/components/Analytics";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full pt-24 md:pt-32 pb-16 px-4 bg-linen-canvas flex flex-col items-center">
      <div className="max-w-[1280px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-[58px] md:text-[74px] font-serif font-light tracking-[-0.05em] text-ink-black mb-8 leading-[0.8]">
            Let's build <br/>
            something beautiful
          </h2>
          <p className="text-[18px] text-stone">
            Готов обсудить ваш следующий проект. Напишите мне.
          </p>
        </motion.div>

        {/* Primary Filled Button */}
        <motion.a
          href="https://t.me/VAD1MSP"
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => trackEvent("cta_click", { method: "telegram" })}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center justify-center px-10 py-5 bg-ink-black text-paper-white rounded-2xl font-medium text-[16px] hover:bg-stone transition-colors duration-300 mb-32"
        >
          Написать в Telegram
        </motion.a>

        {/* Footer */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-ink-black/10">
          <p className="text-stone text-[14px] mb-4 md:mb-0">
            © {new Date().getFullYear()} Cosmos Portfolio.
          </p>
          
          <div className="flex items-center gap-6 text-[14px] font-medium">
            <a href="https://www.instagram.com/vadim__spirin/" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("social_click", { network: "instagram" })} className="text-stone hover:text-ink-black transition-colors">
              Instagram
            </a>
            <a href="https://t.me/VAD1MSP" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("social_click", { network: "telegram" })} className="text-stone hover:text-ink-black transition-colors">
              Telegram
            </a>
            <a href="mailto:hello@example.com" onClick={() => trackEvent("social_click", { network: "email" })} className="text-stone hover:text-ink-black transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
