import React, { useState, useRef } from "react";
import { FEATURED_PROJECTS, FeaturedProject } from "../types";
import { ArrowLeft, ArrowRight, Sparkles, MoveRight } from "lucide-react";

interface FeaturedProjectsProps {
  onOrderProject: (projectTitle: string) => void;
}

export default function FeaturedProjects({ onOrderProject }: FeaturedProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: (activeIndex - 1) * 310,
          behavior: "smooth"
        });
      }
    }
  };

  const nextSlide = () => {
    if (activeIndex < FEATURED_PROJECTS.length - 1) {
      setActiveIndex(prev => prev + 1);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: (activeIndex + 1) * 310,
          behavior: "smooth"
        });
      }
    }
  };

  const jumpToSlide = (idx: number) => {
    setActiveIndex(idx);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: idx * 310,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="cases" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-black/50 uppercase block font-mono">
              НАШИ СТЕНДЫ И ПРОДУКТЫ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black balance-heading font-sans">
              Каталог готовых решений
            </h2>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className={`w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all ${
                activeIndex === 0 
                  ? "opacity-40 cursor-not-allowed" 
                  : "bg-white hover:bg-black hover:text-white cursor-pointer active:scale-95"
              }`}
              aria-label="Previous slide"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              disabled={activeIndex === FEATURED_PROJECTS.length - 1}
              className={`w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all ${
                activeIndex === FEATURED_PROJECTS.length - 1 
                  ? "opacity-40 cursor-not-allowed" 
                  : "bg-white hover:bg-black hover:text-white cursor-pointer active:scale-95"
              }`}
              aria-label="Next slide"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Carousel Layout: Left Fixed, Right List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left large featured card */}
          <div className="lg:col-span-5 h-[480px] rounded-3xl overflow-hidden relative group premium-shadow border border-black/5">
            <img
              src="/images/spar.jpg"
              alt="Наружная реклама на улицах Калининграда"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-8 z-10">
              
              {/* Top Badge */}
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1 border border-white/10">
                  <Sparkles size={10} /> Популярное направление
                </span>
              </div>

              {/* Bottom text information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-white text-3xl font-bold tracking-tight mb-2">
                    Наружная реклама
                  </h3>
                  <p className="text-white/70 text-sm font-medium">
                    Баннеры, фасады, витрины и транспорт. Полное техническое согласование вывесок в Калининграде.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOrderProject("Наружная реклама")}
                  className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-white/90 font-semibold text-xs tracking-wider uppercase transition-[transform,background-color] active:scale-96 shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  Заказать проект <MoveRight size={14} />
                </button>
              </div>

            </div>
          </div>

          {/* Right scrolling carousel cards */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory fade-mask-x"
              style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
            >
              {FEATURED_PROJECTS.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="w-[290px] sm:w-[315px] shrink-0 snap-start bg-white rounded-2xl overflow-hidden premium-shadow border border-black/5 group cursor-pointer transition-all duration-300 hover:translate-y-[-4px]"
                  onClick={() => onOrderProject(proj.title)}
                >
                  <div className="relative aspect-video overflow-hidden overflow-hidden bg-neutral-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded-full text-white text-[9px] font-bold uppercase tracking-wider font-mono border border-white/5">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between h-[230px]">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-black tracking-tight group-hover:text-black/80 transition-colors">
                        {proj.title}
                      </h4>
                      <p className="text-xs text-black/60 leading-relaxed line-clamp-3">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-black/5 mt-auto">
                      <span className="text-[10px] font-bold text-black/40 uppercase tracking-wider font-mono bg-neutral-100 px-2 py-1 rounded">
                        {proj.badge}
                      </span>
                      <span className="text-xs font-semibold text-black/60">
                        {proj.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {FEATURED_PROJECTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => jumpToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx 
                      ? "w-8 bg-black" 
                      : "w-2.5 bg-black/15 hover:bg-black/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
