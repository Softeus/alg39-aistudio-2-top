import React, { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "../types";
import { ArrowRight, Check, Sparkles, X, ShoppingBag, Clock, ShieldCheck } from "lucide-react";

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForQuote }: ServicesProps) {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-black/50 uppercase block mb-3 font-mono">
            НАПРАВЛЕНИЯ И УСЛУГИ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black balance-heading leading-tight">
            Все для продвижения вашего бренда
          </h2>
          <div className="w-12 h-1 bg-black/10 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveModal(service)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm premium-shadow cursor-pointer premium-card-hover border border-black/5 flex flex-col justify-between h-full"
            >
              <div>
                {/* Large Visual Image Panel */}
                <div className="relative aspect-video overflow-hidden bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {service.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1 shadow-sm">
                      <Sparkles size={10} /> Популярно
                    </div>
                  )}
                </div>

                {/* Content Panel */}
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight text-black mb-3 group-hover:text-black/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Button Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal(service);
                  }}
                  className="rainbow-border-btn w-full py-3 text-xs font-semibold tracking-wider uppercase text-black text-center flex items-center justify-center gap-2"
                >
                  Подробнее
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Modal (Bypassing heavy routing) */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with elegant blur */}
            <div
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            ></div>

            {/* Modal Body Container */}
            <div className="relative bg-[#fafafa] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 border border-black/10 animate-scaleUp">
              
              {/* Header Visual Hero */}
              <div className="relative h-64 bg-neutral-200">
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  <X size={18} />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-white/70 text-xs font-bold uppercase tracking-widest block mb-1 font-mono">
                      Направление производства
                    </span>
                    <h4 className="text-white text-2xl font-bold tracking-tight">
                      {activeModal.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Modal Core Contents */}
              <div className="p-8">
                <p className="text-base text-black/70 leading-relaxed mb-6 pretty-paragraph">
                  {activeModal.longDescription}
                </p>

                {/* Tech specifications of premium production */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-white p-5 rounded-2xl border border-black/5">
                  <div className="flex items-start gap-2.5">
                    <Check size={18} className="text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-black/80 block">Тиражи</span>
                      <span className="text-xs text-black/50">Гибкие тиражи от мелкого опта</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock size={18} className="text-black shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-black/80 block">Сроки</span>
                      <span className="text-xs text-black/50">От 2 до 5 рабочих дней</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShoppingBag size={18} className="text-black shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-black/80 block">Доставка</span>
                      <span className="text-xs text-black/50">Калининград и регионы РФ</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-black/80 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-black/80 block">Качество</span>
                      <span className="text-xs text-black/50">Гарантия на материалы и печать</span>
                    </div>
                  </div>
                </div>

                {/* Submit Action within state hierarchy */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      onSelectServiceForQuote(activeModal.title);
                      setActiveModal(null);
                    }}
                    className="flex-1 py-3 px-6 rounded-full bg-black text-white hover:bg-black/90 font-medium text-sm text-center transition-all cursor-pointer active:scale-97"
                  >
                    Перейти к оценке стоимости
                  </button>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="py-3 px-6 rounded-full bg-black/5 hover:bg-black/10 font-medium text-sm text-center transition-all cursor-pointer"
                  >
                    Закрыть
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
