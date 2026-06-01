import React, { useState, useEffect } from "react";
import { Calculator as CalcIcon, ShoppingBag, Send, HandCoins, ShieldAlert, Sparkles, Check } from "lucide-react";

interface CalculatorProps {
  preselectedService?: string;
  onOrderSubmitted: (details: { service: string; quantity: number; estimatedPrice: number; name: string; phone: string }) => void;
}

const PRODUCTION_CATEGORIES = [
  { id: "textile", name: "Брендирование текстиля", basePrice: 420, stepUnit: "шт", minQty: 20 },
  { id: "bags", name: "Печать на пакетах", basePrice: 45, stepUnit: "шт", minQty: 100 },
  { id: "bracelets", name: "Печать на силиконовых браслетах", basePrice: 65, stepUnit: "шт", minQty: 50 },
  { id: "stationary", name: "Печать на ручках и ежедневниках", basePrice: 120, stepUnit: "шт", minQty: 30 },
  { id: "awards", name: "Наградная продукция", basePrice: 1450, stepUnit: "компл", minQty: 5 },
  { id: "outdoor", name: "Наружная реклама", basePrice: 1800, stepUnit: "кв.м", minQty: 1 }
];

export default function Calculator({ preselectedService, onOrderSubmitted }: CalculatorProps) {
  const [selectedCat, setSelectedCat] = useState(PRODUCTION_CATEGORIES[0]);
  const [quantity, setQuantity] = useState(50);
  const [usePremiumMaterials, setUsePremiumMaterials] = useState(false);
  const [hasDesignLayout, setHasDesignLayout] = useState(true);
  const [estimation, setEstimation] = useState(0);

  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync with parental selection
  useEffect(() => {
    if (preselectedService) {
      const match = PRODUCTION_CATEGORIES.find(c => c.name.toLowerCase().includes(preselectedService.toLowerCase()));
      if (match) {
        setSelectedCat(match);
        setQuantity(match.minQty * 3); // sensible pre-select quantity
      }
    }
  }, [preselectedService]);

  // Adjust current quantity boundary if category changes
  useEffect(() => {
    if (quantity < selectedCat.minQty) {
      setQuantity(selectedCat.minQty);
    }
  }, [selectedCat]);

  // Run tier-discount calculations
  useEffect(() => {
    let unitCost = selectedCat.basePrice;

    // Apply bulk volume discount (5% up to 15% discount depending on quantities)
    if (quantity >= selectedCat.minQty * 10) {
      unitCost = selectedCat.basePrice * 0.82; // 18% bulk reduction
    } else if (quantity >= selectedCat.minQty * 5) {
      unitCost = selectedCat.basePrice * 0.90; // 10% volume discount
    } else if (quantity >= selectedCat.minQty * 2) {
      unitCost = selectedCat.basePrice * 0.95; // 5% slight volume discount
    }

    // Material spec modifier
    if (usePremiumMaterials) {
      unitCost *= 1.25; // 25% surcharge for premium materials
    }

    // Design layout consultation modifier
    let total = unitCost * quantity;
    if (!hasDesignLayout) {
      total += 1500; // design adaptation charge
    }

    setEstimation(Math.round(total));
  }, [selectedCat, quantity, usePremiumMaterials, hasDesignLayout]);

  const handleSubmitCalc = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;

    onOrderSubmitted({
      service: selectedCat.name,
      quantity,
      estimatedPrice: estimation,
      name: userName,
      phone: userPhone
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setUserName("");
      setUserPhone("");
    }, 4000);
  };

  return (
    <section id="calculator" className="py-24 bg-neutral-100/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header visual panel */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-black/50 uppercase block font-mono">
            ОНЛАЙН-РАСЧЕТ СТОИМОСТИ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black font-sans leading-tight">
            Соберите стоимость в несколько кликов
          </h2>
          <p className="text-black/60 text-sm max-w-lg mx-auto pretty-paragraph">
            Наш прозрачный калькулятор оптовых партий поможет мгновенно составить смету перед отправкой менеджерам на производство.
          </p>
        </div>

        {/* Dual Form Split Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive sliders configurations block */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-black/5 premium-shadow space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <CalcIcon className="text-black" />
                <h3 className="text-xl font-bold text-black tracking-tight">Настройки вашего тиража</h3>
              </div>

              {/* Category picker */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-black/60 uppercase font-mono block">Направление производства</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PRODUCTION_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCat(cat)}
                      className={`px-4 py-3 text-xs font-bold text-left rounded-xl border transition-all ${
                        selectedCat.id === cat.id
                          ? "border-black bg-black text-white"
                          : "border-black/5 bg-neutral-50 hover:bg-neutral-100 text-black/80"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for Volume quantities */}
              <div className="space-y-3">
                <div className="flex justify-between items-end text-xs font-mono font-bold text-black/70">
                  <span className="uppercase">ОБЪЕМ ТИРАЖА ({selectedCat.stepUnit})</span>
                  <span className="text-base text-black font-sans tabular-nums bg-neutral-50 px-3 py-1 rounded-full border border-black/5">
                    {quantity} {selectedCat.stepUnit}
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedCat.minQty}
                  max={selectedCat.minQty * 30}
                  step={selectedCat.id === "outdoor" ? 1 : selectedCat.id === "awards" ? 5 : 10}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer h-1.5 bg-neutral-100 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] font-bold text-black/30 font-mono">
                  <span>МИН: {selectedCat.minQty} {selectedCat.stepUnit}</span>
                  <span>РЕКОМЕНДУЕМЫЙ ОПТ: {selectedCat.minQty * 10}+ {selectedCat.stepUnit}</span>
                </div>
              </div>

              {/* Boolean Option Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setUsePremiumMaterials(!usePremiumMaterials)}
                  className={`p-4 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    usePremiumMaterials
                      ? "border-black bg-neutral-50"
                      : "border-black/5 bg-white hover:bg-neutral-50"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-black">Премиум материалы</span>
                    <div className={`w-4 h-4 rounded-full border border-black/20 flex items-center justify-center transition-colors ${usePremiumMaterials ? "bg-black text-white border-black" : "bg-white"}`}>
                      {usePremiumMaterials && <Check size={10} />}
                    </div>
                  </div>
                  <span className="text-[10px] text-black/50 leading-relaxed font-semibold">Улучшенные основы, шелковые фактуры или тиснение повышенной плотности (+25%)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setHasDesignLayout(!hasDesignLayout)}
                  className={`p-4 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    hasDesignLayout
                      ? "border-black bg-neutral-50"
                      : "border-black/5 bg-white hover:bg-neutral-50"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-black">Свой готовый макет</span>
                    <div className={`w-4 h-4 rounded-full border border-black/20 flex items-center justify-center transition-colors ${hasDesignLayout ? "bg-black text-white border-black" : "bg-white"}`}>
                      {hasDesignLayout && <Check size={10} />}
                    </div>
                  </div>
                  <span className="text-[10px] text-black/50 leading-relaxed font-semibold">Наш дизайнер бесплатно адаптирует ваш готовый векторный файл под печатные клише</span>
                </button>
              </div>
            </div>

            {/* Warnings context */}
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 flex gap-3 text-xs text-orange-850 mt-4 leading-relaxed font-semibold items-start">
              <ShieldAlert size={16} className="shrink-0 mt-0.5" />
              <span>Расчет является ориентировочным. Точную оптовую смету с учетом действующих скидок составит технолог после загрузки макета.</span>
            </div>
          </div>

          {/* Checkout Submit Order Form */}
          <div className="lg:col-span-5 bg-black text-white p-8 rounded-3xl premium-shadow relative flex flex-col justify-between overflow-hidden">
            {/* Visual background blur highlight */}
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-purple-500/10 rounded-full blur-[80px]"></div>

            <div className="space-y-6 z-10">
              <div className="flex items-center gap-2">
                <HandCoins className="text-white/60" />
                <span className="text-xs font-bold tracking-widest text-white/50 uppercase font-mono">Предварительная смета</span>
              </div>

              {/* Price Estimation visual block */}
              <div className="space-y-1">
                <span className="text-xs text-white/60 font-semibold block">Итоговая стоимость B2B тиража:</span>
                <div className="text-4xl md:text-5xl font-bold tracking-tight text-white tabular-nums flex items-baseline gap-1.5">
                  {estimation.toLocaleString("ru-RU")}
                  <span className="text-lg font-normal text-white/60">₽</span>
                </div>
                <span className="text-[10px] text-white/40 block font-mono pl-0.5">Включая НДС (20%) и складскую упаковку</span>
              </div>

              {/* Breakdowns list */}
              <div className="space-y-3 pt-6 border-t border-white/10 text-xs">
                <div className="flex justify-between font-semibold">
                  <span className="text-white/50">Продукт:</span>
                  <span className="text-white font-bold max-w-[200px] text-right line-clamp-1">{selectedCat.name}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-white/50">Количество:</span>
                  <span className="text-white tabular-nums">{quantity} {selectedCat.stepUnit}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-white/50">Премиум исполнение:</span>
                  <span className="text-white">{usePremiumMaterials ? "Да (+25%)" : "Базовое"}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-white/50">Макет дизайна:</span>
                  <span className="text-white">{hasDesignLayout ? "Предоставлен" : "Разработка (+1500₽)"}</span>
                </div>
              </div>
            </div>

            {/* Direct contact callback panel */}
            <form onSubmit={handleSubmitCalc} className="mt-8 space-y-4 z-10 pt-6 border-t border-white/10">
              {isSuccess ? (
                <div className="p-6 bg-white/10 border border-white/20 rounded-2xl text-center space-y-2 animate-fadeIn">
                  <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-2 font-mono">
                    ✓
                  </div>
                  <h4 className="text-sm font-bold text-white">Вывеска отправлена технологам!</h4>
                  <p className="text-xs text-white/60 leading-normal font-semibold">Команда Art Line свяжется с вами по указанному телефону в течение 15 минут.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase font-mono">Ваше имя или название компании</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван, ООО 'Калининград-Торг'"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white focus:bg-white/10 px-4 py-3 rounded-xl text-xs text-white placeholder-white/33 focus:outline-none transition-all font-semibold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase font-mono">Номер телефона для связи</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white focus:bg-white/10 px-4 py-3 rounded-xl text-xs text-white placeholder-white/33 focus:outline-none transition-all font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-full bg-white text-black hover:bg-neutral-100 active:scale-[0.98] font-bold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    Отправить на калькуляцию <Send size={12} />
                  </button>
                </>
              )}
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
