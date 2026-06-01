import React from "react";

interface MarqueeItem {
  id: string;
  title: string;
  image: string;
}

const COLUMN_A: MarqueeItem[] = [
  {
    id: "m-1-1",
    title: "Брендированные футболки",
    image: "/images/Свитшот-Нанесение-1.jpg",
  },
  {
    id: "m-1-2",
    title: "Печать на пакетах",
    image: "/images/полиэт_пакет.jpg",
  },
  {
    id: "m-1-3",
    title: "Сувенирная продукция",
    image: "/images/Календарь_сувенир.jpg",
  },
  {
    id: "m-1-4",
    title: "Наружная реклама",
    image: "/images/Широкоформатная-печ.jpg"
  }
];

const COLUMN_B: MarqueeItem[] = [
  {
    id: "m-2-1",
    title: "Лазерная гравировка",
    image: "/images/Лазерная-гравировка.jpg",
  },
  {
    id: "m-2-2",
    title: "Ручки с логотипом",
    image: "/images/Ручки.jpg",
  },
  {
    id: "m-2-3",
    title: "Наградные кубки",
    image: "/images/сувениры (3_1).jpg",
  },
  {
    id: "m-2-4",
    title: "Воздушные шары с печатью",
    image: "/images/Печать-на-Шарах.jpg"
  }
];

// Duplicate items to ensure seamless scroll
const FIRST_COLUMN = [...COLUMN_A, ...COLUMN_A, ...COLUMN_A];
const SECOND_COLUMN = [...COLUMN_B, ...COLUMN_B, ...COLUMN_B];

export default function Marquee() {
  return (
    <div className="relative h-[650px] w-full overflow-hidden rounded-3xl bg-neutral-100/50 p-2 border border-black/5">
      {/* Absolute Gradient Fade Masks for top and bottom */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#fafafa] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none"></div>

      {/* Grid container with two columns */}
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Left column - scrolling UP */}
        <div className="h-full overflow-hidden relative">
          <div className="flex flex-col gap-4 animate-marquee-up py-2">
            {FIRST_COLUMN.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="group relative h-[190px] rounded-2xl overflow-hidden bg-white shadow-sm premium-shadow cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Visual Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider opacity-90 mb-1">
                    Производство
                  </span>
                  <p className="text-white text-sm font-semibold leading-snug tracking-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - scrolling DOWN */}
        <div className="h-full overflow-hidden relative">
          <div className="flex flex-col gap-4 animate-marquee-down py-2">
            {SECOND_COLUMN.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="group relative h-[190px] rounded-2xl overflow-hidden bg-white shadow-sm premium-shadow cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Visual Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider opacity-90 mb-1">
                    Фирменный стиль
                  </span>
                  <p className="text-white text-sm font-semibold leading-snug tracking-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
