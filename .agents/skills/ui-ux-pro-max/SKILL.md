---
name: ui-ux-pro-max
description: "AI-powered design intelligence toolkit. Provides a Python script to search for UI styles, colors, typography, charts, and UX guidelines."
---

# UI UX Pro Max (Antigravity Adapted)

Этот скилл содержит локальную базу данных (JSON) с сотнями стилей, палитр и правил UX, а также Python-скрипт для поиска по ней.

## Использование в Antigravity
Вместо вызова CLI-команд, используй инструмент `run_command` для выполнения Python-скрипта.

**Синтаксис поиска:**
```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "<запрос>" --domain <домен>
```

**Доступные домены (--domain):**
- `product` - Рекомендации по типу продукта (SaaS, e-commerce, portfolio)
- `style` - UI стили (glassmorphism, minimalism)
- `typography` - Шрифтовые пары
- `color` - Цветовые палитры
- `landing` - Структура страницы
- `ux` - Лучшие практики
- `gsap` - Анимации

**Пример использования:**
```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "minimalist portfolio" --domain style
```

## Правила адаптации (для отчёта):
Я исключил использование `npx ui-ux-pro-max-cli`, так как это внешняя обёртка. Вместо этого скрипты скопированы напрямую в `.agents/skills/ui-ux-pro-max`, и мы вызываем `search.py` напрямую через Python (который доступен в любой Windows/Linux среде разработки).
