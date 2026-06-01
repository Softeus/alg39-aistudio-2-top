import React, { useState } from "react";
import { CASES_DATA, CaseStudy } from "../types";
import { X, Calendar, User, Package, Settings, MoveRight } from "lucide-react";

export default function Portfolio() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic header visual */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-black/50 uppercase block font-mono">
            РЕАЛИЗОВАННЫЕ КЕЙСЫ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black balance-heading">
            Реализованные проекты и идеи для бизнеса
          </h2>
          <div className="w-12 h-1 bg-black/10 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CASES_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="group bg-white rounded-3xl overflow-hidden premium-shadow border border-black/5 flex flex-col justify-between h-[450px] cursor-pointer hover:translate-y-[-6px] transition-all duration-300"
            >
              <div>
                {/* Image Section */}
                <div className="relative h-56 bg-neutral-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle top pill indicating the category */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/70 backdrop-blur-md border border-white/20 text-[9px] font-bold text-black uppercase tracking-wider rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Contents block */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2 tracking-tight group-hover:opacity-75 transition-opacity">
                    {item.title}
                  </h3>
                  <p className="text-xs text-black/60 leading-relaxed font-semibold line-clamp-3">
                    {item.shortDesc}
                  </p>
                </div>
              </div>

              {/* Bottom CTA footer */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCase(item);
                  }}
                  className="w-full py-3 bg-neutral-100/70 hover:bg-black hover:text-white rounded-full text-xs font-bold text-black uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all active:scale-97 cursor-pointer"
                >
                  Смотреть кейс <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Study Dialog Popover */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop */}
            <div
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            ></div>

            {/* Container */}
            <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 border border-black/10 animate-scaleUp">
              
              {/* Header hero view */}
              <div className="relative h-60 bg-neutral-200">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  <X size={16} />
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider block mb-1">
                      {selectedCase.category}
                    </span>
                    <h4 className="text-white text-2xl font-bold tracking-tight">
                      {selectedCase.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Body particulars of Case study */}
              <div className="p-8 space-y-6">
                
                <div className="space-y-3">
                  <h5 className="text-sm font-bold text-black uppercase tracking-wider font-mono">Описание выполненных работ</h5>
                  <p className="text-sm text-black/70 leading-relaxed pretty-paragraph">
                    {selectedCase.description}
                  </p>
                </div>

                {/* Highlights Table specs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/5">
                  <div className="bg-neutral-50 p-4 rounded-xl border border-black/5 flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-black/40 uppercase tracking-widest font-mono flex items-center gap-1">
                      <User size={10} /> Заказчик
                    </span>
                    <span className="text-xs font-bold text-black">
                      {selectedCase.client}
                    </span>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-xl border border-black/5 flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-black/40 uppercase tracking-widest font-mono flex items-center gap-1">
                      <Package size={10} /> Объем заказа
                    </span>
                    <span className="text-xs font-bold text-black">
                      {selectedCase.volume}
                    </span>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-xl border border-black/5 flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-black/40 uppercase tracking-widest font-mono flex items-center gap-1">
                      <Settings size={10} /> Технология
                    </span>
                    <span className="text-xs font-bold text-black leading-tight">
                      {selectedCase.technologyUsed}
                    </span>
                  </div>
                </div>

                {/* Form dispatch or navigation */}
                <div className="pt-4 flex justify-between items-center">
                  <span className="text-xs text-black/40 font-semibold font-mono">
                    Art Line Group © Kaliningrad
                  </span>
                  
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-black/90 font-semibold text-xs tracking-wider uppercase transition-all"
                  >
                    Понятно
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
