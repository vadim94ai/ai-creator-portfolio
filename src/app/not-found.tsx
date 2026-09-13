import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-linen-canvas text-ink-black px-4 text-center">
      <h1 className="text-[120px] md:text-[200px] font-light tracking-tight leading-none mb-4">404</h1>
      <p className="text-[20px] md:text-[24px] font-medium mb-12">Страница не найдена</p>
      <Link 
        href="/"
        className="px-8 py-4 bg-ink-black text-paper-white rounded-2xl font-medium text-[16px] hover:bg-stone transition-colors duration-300"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
