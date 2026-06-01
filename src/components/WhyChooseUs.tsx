import React from "react";
import { Check, Compass, Cpu, DollarSign, HelpCircle } from "lucide-react";

interface WhyChooseUsProps {
  onCalculateClick: () => void;
  onConsultClick: () => void;
}

export default function WhyChooseUs({ onCalculateClick, onConsultClick }: WhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text & Attributes */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-black/50 uppercase block font-mono">
                О КОМПАНИИ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black balance-heading leading-tight">
                Помогаем бизнесу быть заметнее
              </h2>
            </div>

            {/* List with styled icons */}
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 border border-black/5">
                  <Compass size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-black mb-1">
                    Индивидуальный подход к каждому проекту
                  </h4>
                  <p className="text-sm text-black/60 leading-relaxed max-w-lg">
                    Мы никогда не работаем по шаблону. Наши специалисты тщательно выслушивают цели вашего позиционирования и предлагают оптимальное решение.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 border border-black/5">
                  <DollarSign size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-black mb-1">
                    Снижение стоимости при больших тиражах
                  </h4>
                  <p className="text-sm text-black/60 leading-relaxed max-w-lg">
                    Оптовые объемы позволяют нам существенно сокращать переменные затраты на клише и оснастку, передавая экономическую выгоду вам.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 border border-black/5">
                  <Cpu size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-black mb-1">
                    Современное оборудование и контроль качества
                  </h4>
                  <p className="text-sm text-black/60 leading-relaxed max-w-lg">
                    Собственный технологический парк в Калининграде позволяет гарантировать идеальное совпадение цветов по палитре Pantone и отсутствие дефектов.
                  </p>
                </div>
              </li>
            </ul>

            {/* Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onCalculateClick}
                className="px-8 py-3.5 rounded-full bg-black text-white hover:bg-black/90 font-semibold text-sm transition-[transform,background-color] active:scale-97 cursor-pointer"
              >
                Рассчитать заказ
              </button>

              <button
                type="button"
                onClick={onConsultClick}
                className="rainbow-border-btn px-8 py-3.5 font-semibold text-sm text-black cursor-pointer"
              >
                Получить консультацию
              </button>
            </div>

            {/* Disclaimer in micro-typography */}
            <p className="text-xs text-black/40 leading-relaxed pt-2 max-w-md">
              Работаем с компаниями любого масштаба — от малого бизнеса до крупных корпоративных клиентов и государственных учреждений.
            </p>
          </div>

          {/* Right Column Image Representation */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-black/5">
              <img
                src="/images/spar.jpg"
                alt="Профессиональное производство брендинга Art Line Group"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
                <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/20 max-w-xs">
                  <span className="text-[10px] font-bold text-black/50 uppercase block font-mono mb-1">Участок ЧПУ</span>
                  <p className="text-xs font-semibold text-black leading-normal">
                    Наш производственный цех в Калининграде открыт для согласования образцов тиражей.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
