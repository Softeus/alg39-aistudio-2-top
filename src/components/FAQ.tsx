import React, { useState } from "react";
import { FAQ_DATA } from "../types";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-neutral-100/50 border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Main Section Headings */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-black/50 uppercase block font-mono">
            ЧАСТЫЕ ВОПРОСЫ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black font-sans">
            Ответы на популярные вопросы
          </h2>
          <p className="text-black/60 text-sm max-w-lg mx-auto pretty-paragraph">
            Все, что вам нужно знать о тиражах, сроках, разработке индивидуального дизайна и доставки нашей рекламной продукции.
          </p>
        </div>

        {/* Radix Styled Accordion Pile */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/5 premium-shadow overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button bar */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-black/70 font-bold text-xs shrink-0 font-mono">
                      {idx + 1}
                    </div>
                    <span className="text-sm sm:text-base font-bold text-black tracking-tight select-none">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-neutral-100 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-black text-white" : "text-black/55"
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Secret Answer Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[250px] border-t border-black/5 opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-8 text-sm sm:text-base text-black/60 leading-relaxed font-medium pretty-paragraph flex items-start gap-3">
                    <MessageSquare size={16} className="text-black/30 mt-1 shrink-0" />
                    <span>{item.answer}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support helper notes under list */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-black/5 max-w-lg mx-auto premium-shadow">
          <HelpCircle size={20} className="text-black/40 mx-auto mb-2" />
          <p className="text-xs font-semibold text-black mb-1">Остались дополнительные вопросы?</p>
          <p className="text-xs text-black/50 leading-relaxed mb-4">
            Наши менеджеры с удовольствием проконсультируют вас по любым технологиям и возможностям брендинга.
          </p>
          <a
            href="#contacts"
            className="text-xs font-bold uppercase tracking-wider text-black border-b border-black/30 hover:border-black transition-colors"
          >
            Связаться с менеджером →
          </a>
        </div>

      </div>
    </section>
  );
}
