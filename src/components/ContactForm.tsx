import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowUpRight } from "lucide-react";

interface ContactFormProps {
  initialService?: string;
}

export default function ContactForm({ initialService = "" }: ContactFormProps) {
  const [subject, setSubject] = useState(initialService || "Общий вопрос по производству");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [clientName, setClientName] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !clientName) return;

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setPhone("");
      setMessage("");
      setClientName("");
      setSubject("Общий вопрос по производству");
    }, 4500);
  };

  return (
    <section id="contacts" className="py-24 bg-[#fafafa] border-t border-black/5 relative overflow-hidden">
      
      {/* Absolute decorative gradient shape */}
      <div className="absolute bottom-[-150px] left-[-150px] w-[350px] h-[350px] bg-sky-200/20 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl premium-shadow border border-black/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Coordinates & Context cards */}
          <div className="lg:col-span-5 bg-neutral-900 text-white p-8 md:p-12 flex flex-col justify-between space-y-12 relative overflow-hidden">
            {/* Ambient circle glow */}
            <div className="absolute top-[-80px] right-[-85px] w-[200px] h-[200px] bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>

            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-white/40 uppercase block font-mono">
                СВЯЗАТЬСЯ С НАМИ
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Давайте работать вместе
              </h3>
              <p className="text-white/60 text-sm leading-relaxed pretty-paragraph">
                Подготовим расчет стоимости, подскажем оптимальную технологию нанесения и предложим лучшие решения под ваш рекламный бюджет. Наш Калининградский офис работает с понедельника по пятницу.
              </p>
            </div>

            {/* Direct coordinate links with tactile frames */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase font-mono block mb-0.5">Телефоны отдела продаж</span>
                  <a href="tel:+79814776229" className="text-sm font-bold text-white hover:text-white/80 block transition-colors tabular-nums">
                    +7 (981) 477-62-29
                  </a>
                  <a href="tel:+74012918190" className="text-sm font-bold text-white hover:text-white/80 block transition-colors tabular-nums">
                    +7 (4012) 91-81-90
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase font-mono block mb-0.5 font-sans">Электронная почта</span>
                  <a href="mailto:artline39@gmail.com" className="text-sm font-bold text-white hover:text-white/80 block transition-colors">
                    artline39@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase font-mono block mb-0.5">Офис и производство</span>
                  <p className="text-sm font-bold text-white leading-normal">
                    Калининград,<br />ул. Георгия Димитрова, 1
                  </p>
                  <a
                    href="https://yandex.ru/maps/?text=Калининград,ул.+Георгия+Димитрова,+1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-wider text-white/50 border-b border-white/20 hover:text-white hover:border-white transition-all flex items-center gap-1 mt-1 cursor-pointer w-fit"
                  >
                    Открыть на Яндекс Картах <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
            </div>

            {/* Custom footer micro line */}
            <div className="pt-6 border-t border-white/15">
              <p className="text-[10px] text-white/33 uppercase font-mono tracking-widest leading-none">
                Art Line Group — Калининград • С 2009 года
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Form panel */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
            {success ? (
              <div className="text-center py-12 px-6 bg-green-50/50 border border-green-100 rounded-2xl space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-black tracking-tight">Запрос на расчет отправлен успешно</h4>
                  <p className="text-sm text-black/60 max-w-md mx-auto leading-relaxed pretty-paragraph">
                    Спасибо, {clientName}! Мы зафиксировали тему <strong>«{subject}»</strong>. Наш проектный менеджер свяжется с вами в течение нескольких минут для подробной технической консультации.
                  </p>
                </div>
                <div className="pt-2 text-xs font-mono font-bold text-black/30">
                  ПОРТ СВЯЗИ • 0.0.0.0:3000
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-black tracking-tight mb-2">Отправьте заявку на расчёт</h4>
                  <p className="text-xs text-black/50 leading-relaxed font-semibold">Наш сотрудник свяжется с вами, чтобы обсудить размеры, макет и сделать точную смету.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-black/60 uppercase font-mono block">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      placeholder="Константин"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#fafafa] border border-black/5 focus:border-black focus:bg-white px-4 py-3 rounded-xl text-sm text-black focus:outline-none transition-all font-semibold"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-black/60 uppercase font-mono block">Телефон для связи *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (900) 001-02-03"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#fafafa] border border-black/5 focus:border-black focus:bg-white px-4 py-3 rounded-xl text-sm text-black focus:outline-none transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Subheading selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black/60 uppercase font-mono block">Интересующее направление</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/5 focus:border-black focus:bg-white px-4 py-3 rounded-xl text-sm text-black font-semibold focus:outline-none transition-all"
                  >
                    <option value="Общий вопрос по производству">Общий вопрос по производству</option>
                    <option value="Брендирование текстиля">Брендирование текстиля</option>
                    <option value="Печать на пакетах">Печать на пакетах и упаковке</option>
                    <option value="Печать на силиконовых браслетах">Печать на силиконовых браслетах</option>
                    <option value="Наградная продукция">Изготовление наградной продукции</option>
                    <option value="Наружная реклама">Монтаж и печать наружной рекламы</option>
                    <option value="Лазерная гравировка">Лазерная гравировка на металле/дереве</option>
                    <option value="Полиграфическая продукция">Полиграфия и буклеты</option>
                  </select>
                </div>

                {/* Question box message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black/60 uppercase font-mono block">Комментарий или параметры тиража (необязательно)</label>
                  <textarea
                    rows={3}
                    placeholder="Какое количество вас интересует? Укажите размеры, цвет или пожелания."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#fafafa] border border-black/5 focus:border-black focus:bg-white px-4 py-3 rounded-xl text-sm text-black focus:outline-none transition-all font-semibold resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-[10px] text-black/40 leading-relaxed font-semibold max-w-[280px]">
                    Нажимая кнопку «Получить расчет», вы соглашаетесь с условиями хранения персональных данных.
                  </p>
                  
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-black text-white hover:bg-black/90 active:scale-97 font-bold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md self-end sm:self-auto"
                  >
                    Получить расчет <Send size={12} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
