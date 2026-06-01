import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Check, 
  HelpCircle, 
  TrendingUp, 
  Briefcase, 
  Layers, 
  Truck, 
  FileText, 
  Instagram, 
  MessageSquare, 
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  X,
  Share2
} from "lucide-react";

import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProjects from "./components/FeaturedProjects";
import Technologies from "./components/Technologies";
import FAQ from "./components/FAQ";
import Portfolio from "./components/Portfolio";
import Calculator from "./components/Calculator";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [calculationSubject, setCalculationSubject] = useState("");
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [surveyStep, setSurveyStep] = useState(1);
  const [surveyAnswers, setSurveyAnswers] = useState<Record<string, string>>({});
  const [surveyResult, setSurveyResult] = useState<string | null>(null);

  // Scroll coordinators
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToContacts = () => {
    const element = document.getElementById("contacts");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setCalculationSubject(serviceTitle);
    scrollToCalculator();
  };

  const handleOrderSubmitted = (details: { service: string; quantity: number; estimatedPrice: number; name: string; phone: string }) => {
    console.log("Calculated Order Submitted:", details);
  };

  // Micro scale interactive advisory survey logic
  const handleSurveyOption = (question: string, value: string) => {
    const nextAnswers = { ...surveyAnswers, [question]: value };
    setSurveyAnswers(nextAnswers);

    if (surveyStep < 3) {
      setSurveyStep(prev => prev + 1);
    } else {
      // Evaluate result
      let matchText = "";
      if (nextAnswers["goal"] === "promo" && nextAnswers["qty"] === "bulk") {
        matchText = "ШЕЛКОГРАФИЯ (Печать на пакетах или браслетах) — лучший вариант с минимальной себестоимостью одного оттиска!";
      } else if (nextAnswers["goal"] === "staff" || nextAnswers["goal"] === "vip") {
        matchText = "БРЕНДИРОВАНИЕ ТЕКСТИЛЯ + ЛАЗЕРНАЯ ГРАВИРОВКА — создадут безукоризненный, благородный корпоративный стиль.";
      } else if (nextAnswers["goal"] === "facade") {
        matchText = "ШИРОКОФОРМАТНАЯ ПЕЧАТЬ — баннеры премиум плотности с УФ-защитой для идеального рекламного позиционирования.";
      } else {
        matchText = "УФ-ПЕЧАТЬ + ТАМПОПЕЧАТЬ — идеальные методы для яркого многоцветного нанесения логотипов на любые сложные сувениры.";
      }
      setSurveyResult(matchText);
    }
  };

  const resetSurveyState = () => {
    setSurveyStep(1);
    setSurveyAnswers({});
    setSurveyResult(null);
    setSurveyOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-black selection:text-white antialiased">
      
      {/* Sticky Header Navigation */}
      <Navbar
        onCalculateClick={scrollToCalculator}
        onContactClick={scrollToContacts}
      />

      {/* Spacing compensation behind fixed header */}
      <div className="h-20 lg:h-24"></div>

      {/* HERO SECTION */}
      <section className="py-12 md:py-20 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content panel */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Experience Rating badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white text-xs text-black border border-black/5 premium-shadow">
              <span className="text-black/80 font-bold font-sans">⭐ 15+ лет опыта</span>
              <div className="w-1 h-3 bg-black/10"></div>
              <span className="text-black/50 font-semibold">С 2009 года в Калининграде</span>
            </div>

            {/* Main display Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-black balance-heading leading-[1.1]">
              Производство рекламы и сувенирной продукции для бизнеса
            </h1>

            {/* Bullets lists */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2">
              <div className="flex items-center gap-2.5 py-1 text-black font-semibold text-sm">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                  <Check size={12} />
                </div>
                <span>Собственное производство</span>
              </div>

              <div className="flex items-center gap-2.5 py-1 text-black font-semibold text-sm">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                  <Check size={12} />
                </div>
                <span>Выгодные цены на тиражи</span>
              </div>

              <div className="flex items-center gap-2.5 py-1 text-black font-semibold text-sm">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                  <Check size={12} />
                </div>
                <span>Полный цикл брендирования</span>
              </div>
            </div>

            <div className="h-px bg-black/5"></div>

            {/* Direct CTA/Description Box */}
            <div className="space-y-6 pt-2">
              <div className="space-y-1">
                <span className="text-xs font-bold text-black/40 uppercase tracking-widest font-mono block">Более 20 направлений производства</span>
                <p className="text-black/60 text-sm sm:text-base leading-relaxed pretty-paragraph">
                  Сувениры, наружная реклама, полиграфия, текстиль и разнообразная корпоративная продукция с доставкой во все муниципальные округа области.
                </p>
              </div>

              {/* Instant action call triggers */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToCalculator}
                  className="px-8 py-3.5 rounded-full bg-black text-white hover:bg-black/90 font-bold text-sm tracking-wider uppercase transition-all duration-300 active:scale-97 cursor-pointer shadow-md text-center"
                >
                  Получить расчет
                </button>

                {/* Micro info card wrapper */}
                <div 
                  onClick={() => setSurveyOpen(true)}
                  className="p-4 rounded-2xl bg-white border border-black/5 hover:bg-neutral-50/50 cursor-pointer transition-all premium-shadow flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-black font-bold text-xs font-mono">
                    💡
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-black/40 uppercase font-mono block">Какой формат подойдет вашему бизнесу?</span>
                    <span className="text-xs font-bold text-black border-b border-black/20 hover:border-black transition-colors flex items-center gap-1">
                      Подобрать решение <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Auto scrolling stream marquee */}
          <div className="lg:col-span-5 h-[650px]">
            <Marquee />
          </div>

        </div>
      </section>

      {/* SERVICES DYNAMIC GRID */}
      <Services
        onSelectServiceForQuote={handleSelectServiceForQuote}
      />

      {/* PROJECTS SELECTOR DESIGN SLIDER */}
      <FeaturedProjects
        onOrderProject={handleSelectServiceForQuote}
      />

      {/* TECHNOLOGIES BLOCK */}
      <Technologies
        onLearnMoreClick={() => {
          const element = document.getElementById("faq");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        onContactClick={scrollToContacts}
      />

      {/* WHY CHOOSE US PRECISED ACCENT */}
      <WhyChooseUs
        onCalculateClick={scrollToCalculator}
        onConsultClick={scrollToContacts}
      />

      {/* CASES PORTFOLIO GRID */}
      <Portfolio />

      {/* LIVE CALCULATOR INTERACTOR */}
      <Calculator
        preselectedService={calculationSubject}
        onOrderSubmitted={handleOrderSubmitted}
      />

      {/* ACCORDION FAQ BLOCK */}
      <FAQ />

      {/* CONTACT / CTA FORM CARD */}
      <ContactForm
        initialService={calculationSubject}
      />

      {/* DIALOG POPUP: Podobrat reshenie */}
      {surveyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={resetSurveyState} className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"></div>
          
          <div className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-black/10 animate-scaleUp z-10 space-y-6">
            <button
              onClick={resetSurveyState}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black flex items-center justify-center cursor-pointer transition-colors"
            >
              <X size={16} />
            </button>

            {/* Header survey */}
            <div className="space-y-1.5 pr-6">
              <span className="text-[10px] font-bold text-black/40 uppercase font-mono tracking-wider">Интерактивный B2B помощник</span>
              <h4 className="text-xl font-bold text-black tracking-tight">Подбор печатного формата</h4>
            </div>

            {/* Dynamic steps content */}
            {!surveyResult ? (
              <div className="space-y-4">
                {/* Step indicator */}
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`h-1.5 rounded-full flex-grow transition-colors ${
                        step <= surveyStep ? "bg-black" : "bg-neutral-150"
                      }`}
                    />
                  ))}
                </div>

                {surveyStep === 1 && (
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-black/50 uppercase font-mono">Шаг 1: Какова основная цель продвижения?</p>
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("goal", "promo")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        Раздача подарков клиентам и участникам выставок
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("goal", "staff")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        Обеспечить сотрудников единым стилем одежды
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("goal", "vip")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        Элитные подарки для ключевых партнеров бизнеса
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("goal", "facade")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        Заметно оформить фасад, офис продаж или витрину
                      </button>
                    </div>
                  </div>
                )}

                {surveyStep === 2 && (
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-black/50 uppercase font-mono">Шаг 2: Какой примерный объем нужен?</p>
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("qty", "unit")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        Единичный тираж / Эксклюзивная ручная сборка
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("qty", "mid")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        Средний тираж (от 20 до 200 единиц)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("qty", "bulk")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        Большой объем (более 200 - 500 единиц)
                      </button>
                    </div>
                  </div>
                )}

                {surveyStep === 3 && (
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-black/50 uppercase font-mono">Шаг 3: Срок готовности продукции?</p>
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("time", "fast")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        Срочно! Буквально вчера (в течение 24 - 48 часов)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("time", "standard")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        В штатном режиме (3 - 5 рабочих дней)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSurveyOption("time", "flexible")}
                        className="w-full text-left p-3.5 rounded-xl border border-black/5 hover:border-black hover:bg-neutral-50/50 text-xs font-semibold text-black transition-colors"
                      >
                        Гибкий (готовимся к крупному мероприятию заранее)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Result screen output */}
                <div className="p-5 bg-[#fafafa] rounded-2xl border border-black/5 text-center space-y-2">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2 font-mono">
                    ✓
                  </div>
                  <span className="text-[9px] font-bold text-black/40 uppercase font-mono">Идеальный выбор оборудования:</span>
                  <p className="text-xs font-bold text-black leading-relaxed">
                    {surveyResult}
                  </p>
                </div>

                <div className="flex gap-2.5">
                  <button
                    onClick={() => {
                      resetSurveyState();
                      scrollToCalculator();
                    }}
                    className="flex-grow py-3 px-6 rounded-full bg-black text-white hover:bg-black/90 font-bold text-xs tracking-wider uppercase text-center transition-all cursor-pointer"
                  >
                    Перейти к калькулятору
                  </button>
                  <button
                    onClick={resetSurveyState}
                    className="py-3 px-5 rounded-full bg-black/5 hover:bg-black/10 font-semibold text-xs text-black transition-all cursor-pointer"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-neutral-900 border-t border-white/5 text-white/80 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
            
            {/* Logo column */}
            <div className="lg:col-span-4 space-y-6">
              <a href="#root" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-mono font-bold transition-transform group-hover:rotate-12">
                  <span>AL</span>
                </div>
                <span className="font-sans font-bold text-lg tracking-wider text-white">
                  ART LINE GROUP
                </span>
              </a>

              <p className="text-xs text-white/50 leading-relaxed max-w-sm pretty-paragraph">
                Профессиональный центр Брендирования, Полиграфии и Наружной Рекламы. Обладаем собственным высокотехнологичным печатным двором и ЧПУ мощностями в Калининграде. Помогаем вашему бренду быть в центре внимания.
              </p>

              {/* Social Channels contacts */}
              <div className="flex items-center gap-4 text-white/40">
                <a href="#contacts" className="hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#contacts" className="hover:text-white transition-colors">
                  <MessageSquare size={18} />
                </a>
                <a href="#contacts" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors font-mono">
                  B2B CHANNELS
                </a>
              </div>
            </div>

            {/* Links lists: Услуги */}
            <div className="lg:col-span-3 space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-white uppercase font-mono">Услуги</h5>
              <ul className="space-y-2 text-xs text-white/50">
                <li><a href="#services" className="hover:text-white transition-all">Шелкотрафаретная печать</a></li>
                <li><a href="#services" className="hover:text-white transition-all">Прямая УФ-печать на пластике</a></li>
                <li><a href="#services" className="hover:text-white transition-all">Лазерная гравировка CO2</a></li>
                <li><a href="#services" className="hover:text-white transition-all">Ручки и канцелярская полиграфия</a></li>
                <li><a href="#services" className="hover:text-white transition-all">Брендирование толстовок и текстиля</a></li>
              </ul>
            </div>

            {/* Links lists: Компания */}
            <div className="lg:col-span-2 space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-white uppercase font-mono">Компания</h5>
              <ul className="space-y-2 text-xs text-white/50">
                <li><a href="#why-choose-us" className="hover:text-white transition-all">О компании</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-all">Наше портфолио</a></li>
                <li><a href="#contacts" className="hover:text-white transition-all">Карта и Контакты</a></li>
                <li><a href="#calculator" className="hover:text-white transition-all">Онлайн Калькулятор</a></li>
              </ul>
            </div>

            {/* Links lists: Информация */}
            <div className="lg:col-span-3 space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-white uppercase font-mono">Информация</h5>
              <ul className="space-y-2 text-xs text-white/50">
                <li><span className="block text-white/33">ИНН: 390623351347</span></li>
                <li><a href="#contacts" className="hover:text-white transition-all">Доставка по Калининградской ОЭЗ</a></li>
                <li><a href="#why-choose-us" className="hover:text-white transition-all">Реквизиты и оплата по выставленному счету</a></li>
                <li><a href="#contacts" className="hover:text-white transition-all">Политика конфиденциальности компании</a></li>
              </ul>
            </div>

          </div>

          <div className="h-px bg-white/5 my-8"></div>

          {/* Copyright indicators */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-white/33 gap-4">
            <p className="max-w-2xl leading-relaxed pretty-paragraph">
              © {new Date().getFullYear()} Art Line Group. Производство сувенирной продукции, рекламной полиграфии и наружной вывесочной рекламы в Калининграде. Все права защищены законом РФ.
            </p>
            <span className="shrink-0 font-mono text-[10px]">
              DEVELOPED IN KALININGRAD
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
