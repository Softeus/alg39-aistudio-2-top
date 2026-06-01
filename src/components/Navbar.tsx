import React, { useState, useEffect } from "react";
import { Phone, SquareChartGantt, Sparkles, Send, Flame, Menu, X } from "lucide-react";

interface NavbarProps {
  onCalculateClick: () => void;
  onContactClick: () => void;
}

export default function Navbar({ onCalculateClick, onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticking header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.03)] border-b border-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Text */}
        <a
          href="#root"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center transition-transform hover:rotate-12">
            <span className="text-white text-xs font-mono font-bold">AL</span>
          </div>
          <span className="font-sans font-bold text-lg tracking-wider text-black group-hover:opacity-73 transition-opacity">
            ART LINE GROUP
          </span>
        </a>

        {/* Center Navigation Links (Desktop Only) */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-black/70 hover:text-black transition-colors cursor-pointer"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection("cases")}
            className="text-sm font-medium text-black/70 hover:text-black transition-colors cursor-pointer"
          >
            Наружная реклама
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-sm font-medium text-black/70 hover:text-black transition-colors cursor-pointer"
          >
            Сувениры
          </button>
          <button
            onClick={() => scrollToSection("technologies")}
            className="text-sm font-medium text-black/70 hover:text-black transition-colors cursor-pointer"
          >
            Полиграфия
          </button>
          <button
            onClick={() => scrollToSection("why-choose-us")}
            className="text-sm font-medium text-black/70 hover:text-black transition-colors cursor-pointer"
          >
            Брендирование
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="text-sm font-medium text-black/70 hover:text-black transition-colors cursor-pointer"
          >
            Контакты
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Solid Dark button with tap feedback */}
          <button
            onClick={onCalculateClick}
            className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-black/90 font-medium text-sm transition-[transform,background-color] active:scale-96 shadow-sm cursor-pointer"
          >
            Рассчитать заказ
          </button>

          {/* Rainbow Gradient-border Button */}
          <button
            onClick={onContactClick}
            className="rainbow-border-btn px-6 py-2.5 font-medium text-sm text-black flex items-center justify-center cursor-pointer"
          >
            Связаться
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-black hover:bg-black/5 rounded-full transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-lg px-6 py-6 flex flex-col gap-4 max-h-screen overflow-y-auto animate-fadeIn">
          <button
            onClick={() => scrollToSection("services")}
            className="text-left py-2 text-base font-semibold text-black/80 hover:text-black transition-colors"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection("cases")}
            className="text-left py-2 text-base font-semibold text-black/80 hover:text-black transition-colors"
          >
            Наружная реклама
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-left py-2 text-base font-semibold text-black/80 hover:text-black transition-colors"
          >
            Сувениры
          </button>
          <button
            onClick={() => scrollToSection("technologies")}
            className="text-left py-2 text-base font-semibold text-black/80 hover:text-black transition-colors"
          >
            Полиграфия
          </button>
          <button
            onClick={() => scrollToSection("why-choose-us")}
            className="text-left py-2 text-base font-semibold text-black/80 hover:text-black transition-colors"
          >
            Брендирование
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="text-left py-2 text-base font-semibold text-black/80 hover:text-black transition-colors"
          >
            Контакты
          </button>

          <div className="h-px bg-black/5 my-2"></div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCalculateClick();
              }}
              className="w-full text-center py-3 rounded-full bg-black text-white hover:bg-black/95 font-medium text-sm transition-transform active:scale-97 cursor-pointer"
            >
              Рассчитать заказ
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="rainbow-border-btn w-full text-center py-3 font-medium text-sm text-black flex items-center justify-center cursor-pointer"
            >
              Связаться
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
