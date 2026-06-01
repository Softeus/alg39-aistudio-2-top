import React, { useState } from "react";
import { TECHNOLOGIES_DATA, Technology } from "../types";
import { 
  Printer, 
  Zap, 
  Flame, 
  Layers, 
  Maximize, 
  Target, 
  CheckCircle, 
  ArrowUpRight, 
  Smile,
  X
} from "lucide-react";

interface TechnologiesProps {
  onLearnMoreClick: () => void;
  onContactClick: () => void;
}

const getIcon = (name: string, size = 28) => {
  switch (name) {
    case "Printer": return <Printer size={size} className="text-black" />;
    case "Zap": return <Zap size={size} className="text-black" />;
    case "Sparkles": return <Maximize size={size} className="text-black" />;
    case "Flame": return <Flame size={size} className="text-black" />;
    case "Maximize": return <Layers size={size} className="text-black" />;
    case "Layers": return <Target size={size} className="text-black" />;
    default: return <Printer size={size} className="text-black" />;
  }
};

export default function Technologies({ onLearnMoreClick, onContactClick }: TechnologiesProps) {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  return (
    <section id="technologies" className="py-24 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content and twin action buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-black/50 uppercase block font-mono">
              ТЕХНОЛОГИИ НАНЕСЕНИЯ И БРЕНДИНГА
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black balance-heading font-sans">
              Современные технологии производства
            </h2>
            <p className="text-black/60 text-sm leading-relaxed pretty-paragraph">
              Качественные материалы, профессиональное оборудование и проверенные сертифицированные методы нанесения логотипов на любую основу.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onLearnMoreClick}
              className="px-6 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black font-semibold text-sm transition-all active:scale-97 cursor-pointer"
            >
              Узнать больше
            </button>
            <button
              onClick={onContactClick}
              className="rainbow-border-btn px-6 py-2.5 font-semibold text-sm text-black flex items-center justify-center cursor-pointer"
            >
              Связаться
            </button>
          </div>
        </div>

        {/* 6 Large Icon Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGIES_DATA.map((tech) => (
            <div
              key={tech.id}
              onClick={() => setSelectedTech(tech)}
              className="group bg-white p-8 rounded-2xl border border-black/5 premium-shadow cursor-pointer hover:bg-neutral-50/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative subtle grid lines */}
              <div className="absolute top-0 right-0 p-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]">
                <ArrowUpRight size={18} className="text-black/20 group-hover:text-black/60 transition-colors" />
              </div>

              {/* Large Icon Box */}
              <div className="w-14 h-14 rounded-full bg-neutral-100/80 flex items-center justify-center mb-6 group-hover:bg-neutral-100 transition-colors">
                {getIcon(tech.iconName)}
              </div>

              {/* Text parameters */}
              <h3 className="text-xl font-bold text-black mb-3 select-none">
                {tech.title}
              </h3>
              <p className="text-xs text-black/60 leading-relaxed font-medium mb-4 pretty-paragraph">
                {tech.shortDesc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-black/40">
                <span>ОБЛАСТЬ Применения:</span>
                <span className="text-black/70 font-sans tracking-normal">{tech.idealFor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical interactive bottom description overlay */}
        {selectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={() => setSelectedTech(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            ></div>

            <div className="relative bg-[#fafafa] rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-black/10 animate-scaleUp z-10">
              
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black flex items-center justify-center transition-all cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center">
                  {getIcon(selectedTech.iconName, 22)}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-black/40 tracking-wider uppercase font-mono">Производственный профиль</span>
                  <h4 className="text-xl font-bold text-black">{selectedTech.title}</h4>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-sm text-black/75 leading-relaxed pretty-paragraph">
                  {selectedTech.fullDesc}
                </p>

                <div>
                  <h5 className="text-xs font-bold text-black uppercase tracking-wider font-mono mb-3">Главные технологические свойства</h5>
                  <ul className="space-y-2">
                    {selectedTech.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-black/70">
                        <CheckCircle size={14} className="text-black/90 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-black/5">
                  <span className="text-[10px] font-bold text-black/40 uppercase font-mono block mb-1">Рекомендуется для нанесения:</span>
                  <p className="text-xs text-black/80 font-medium">
                    {selectedTech.idealFor}
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      onContactClick();
                      setSelectedTech(null);
                    }}
                    className="flex-grow py-3 px-6 rounded-full bg-black text-white hover:bg-black/90 font-medium text-xs tracking-wider uppercase transition-all"
                  >
                    Заказать по этой технологии
                  </button>
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="py-3 px-5 rounded-full bg-black/5 hover:bg-black/10 font-medium text-xs tracking-wider text-black transition-all"
                  >
                    Назад
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
