"use client";

import Script from "next/script";

declare global {
  interface Window {
    gtag: any;
    ym: any;
  }
}

export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // ЗАМЕНИТЕ НА ВАШ GA4 ID
export const YM_COUNTER_ID = 00000000; // ЗАМЕНИТЕ НА ВАШ ID ЯНДЕКС.МЕТРИКИ

export default function Analytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Yandex Metrika с включенным Вебвизором */}
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${YM_COUNTER_ID}, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });
          `,
        }}
      />
    </>
  );
}

// Утилита для отправки событий
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window !== "undefined") {
    // Отправка в Google Analytics
    if (window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
    // Отправка в Яндекс.Метрику
    if (window.ym) {
      window.ym(YM_COUNTER_ID, "reachGoal", eventName, eventParams);
    }
  }
};
