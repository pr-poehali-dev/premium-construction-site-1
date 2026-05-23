import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";
import LeadModal from "@/components/LeadModal";

const HERO_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f0768fb3-be33-4885-8c10-3c0948ff1aa7.jpg";

const cities = [
  "Балашиха", "Подольск", "Химки", "Мытищи", "Королёв", "Люберцы",
  "Красногорск", "Одинцово", "Домодедово", "Щёлково", "Сергиев Посад",
  "Электросталь", "Коломна", "Серпухов", "Раменское", "Орехово-Зуево",
  "Долгопрудный", "Пушкино", "Реутов", "Жуковский", "Воскресенск",
  "Чехов", "Наро-Фоминск", "Дмитров", "Истра", "Клин", "Лобня",
  "Лыткарино", "Луховицы", "Можайск", "Ногинск", "Павловский Посад",
  "Шатура", "Солнечногорск", "Краснознаменск", "Фрязино", "Дзержинский",
  "Ивантеевка", "Лосино-Петровский", "Дубна", "Талдом", "Ступино",
  "Кашира", "Зарайск", "Озёры", "Бронницы", "Егорьевск", "Протвино",
  "Пущино", "Волоколамск", "Руза", "Звенигород",
];

const advantages = [
  { icon: "Zap", title: "Быстрый выезд", desc: "Замер на объекте в день обращения или на следующий день" },
  { icon: "Ruler", title: "Бесплатный замер", desc: "Выезжаем на участок, измеряем, считаем — без обязательств" },
  { icon: "FileText", title: "Договор и смета", desc: "Все условия фиксируем письменно. Никаких скрытых платежей" },
  { icon: "Shield", title: "Гарантия 5 лет", desc: "Несём ответственность за каждый выполненный объект" },
  { icon: "Lock", title: "Фиксированная цена", desc: "Цена в смете не меняется после подписания договора" },
  { icon: "Image", title: "Фотоотчёт", desc: "Еженедельные фотоотчёты с объекта — вы всегда в курсе" },
  { icon: "Wrench", title: "Работа под ключ", desc: "От замера до уборки — выполняем все этапы своими силами" },
];

export default function Geography() {
  const [leadOpen, setLeadOpen] = useState(false);
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={HERO_IMG} alt="География работ" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,75%)] mb-2">СтройДом</p>
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white">Где мы работаем</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 reveal">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,42%,32%)] mb-4">География</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)] leading-tight mb-8">
                Москва и вся<br /><em>Московская область</em>
              </h2>
              <div className="space-y-5 font-body text-base text-[hsl(30,15%,28%)] leading-relaxed">
                <p>
                  Мы строим в Москве и по всей Московской области — без ограничений по удалённости. Выезжаем в любой город, посёлок, деревню, СНТ и коттеджный посёлок. Команда базируется в Москве, материалы и техника доезжают до объекта в день начала работ.
                </p>
                <p>
                  За 12 лет мы поработали в каждом районе Подмосковья: от центральных Химок и Мытищ до Шатуры и Зарайска. Знаем особенности грунтов, погодных условий и логистики в каждом направлении — это позволяет точно планировать сроки и сметы.
                </p>
                <p>
                  Если вы живёте в ближайшей к Москве области (Тула, Калуга, Владимир, Тверь, Рязань) — выезд возможен по согласованию. Просто оставьте заявку с адресом объекта, и менеджер уточнит условия выезда.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 reveal reveal-delay-2 mt-12 lg:mt-0">
              <div className="bg-[hsl(38,30%,90%)] p-8 lg:p-10">
                <Icon name="MapPin" size={28} className="text-[hsl(28,42%,32%)] mb-5" />
                <h3 className="font-display text-2xl font-medium text-[hsl(25,40%,22%)] mb-4">Куда выезжаем</h3>
                <ul className="space-y-3 font-body text-sm text-[hsl(25,25%,22%)]">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-[hsl(28,42%,32%)] mt-1 shrink-0" />
                    <span>В Москву — все районы и округа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-[hsl(28,42%,32%)] mt-1 shrink-0" />
                    <span>По всей Московской области</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-[hsl(28,42%,32%)] mt-1 shrink-0" />
                    <span>В города, посёлки, деревни</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-[hsl(28,42%,32%)] mt-1 shrink-0" />
                    <span>В СНТ и коттеджные посёлки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-[hsl(28,42%,32%)] mt-1 shrink-0" />
                    <span>В соседние области — по согласованию</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities list */}
      <section className="py-20 bg-[hsl(38,25%,93%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal mb-10">
            <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,42%,32%)] mb-3">Города Подмосковья</p>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-[hsl(25,40%,22%)]">
              52 города, где у нас<br /><em>уже есть объекты</em>
            </h2>
          </div>
          <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
            {cities.map((city) => (
              <div key={city} className="flex items-center gap-2 group">
                <span className="w-1 h-1 bg-[hsl(28,42%,32%)] shrink-0 rounded-full" />
                <span className="font-body text-sm text-[hsl(25,25%,25%)] group-hover:text-[hsl(28,42%,32%)] transition-colors">
                  {city}
                </span>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 bg-[hsl(40,30%,97%)] border-l-4 border-[hsl(28,42%,32%)] p-6">
            <p className="font-body text-sm text-[hsl(25,25%,22%)] leading-relaxed">
              <span className="font-semibold">Если вашего населённого пункта нет в списке</span> — мы всё равно работаем по всей области. Просто оставьте заявку с адресом, мы приедем на замер и подготовим смету.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,42%,32%)] mb-3">Преимущества</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)]">
              Что входит<br /><em>в нашу работу</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(35,20%,85%)]">
            {advantages.map((a, i) => (
              <div key={a.title} className={`reveal reveal-delay-${Math.min((i % 4) + 1, 4)} bg-[hsl(40,30%,97%)] p-7`}>
                <div className="w-9 h-9 bg-[hsl(38,30%,88%)] flex items-center justify-center mb-5">
                  <Icon name={a.icon} size={14} className="text-[hsl(28,42%,32%)]" fallback="Check" />
                </div>
                <h3 className="font-display text-lg font-medium text-[hsl(25,35%,18%)] mb-2">{a.title}</h3>
                <p className="font-body text-sm text-[hsl(30,15%,32%)] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(25,40%,20%)]">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <div className="reveal">
            <h2 className="font-display text-3xl lg:text-4xl font-light text-[hsl(38,35%,94%)] mb-4">
              Готовы приехать к вам<br />на замер уже завтра
            </h2>
            <p className="font-body text-base text-[hsl(30,15%,70%)] mb-10 max-w-xl mx-auto">
              Назовите адрес объекта — менеджер согласует удобное время и приедет с замерами, материалами и сметой. Бесплатно и без обязательств.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setLeadOpen(true)}
                className="bg-[hsl(38,40%,97%)] text-[hsl(25,40%,22%)] font-body text-sm font-medium px-8 py-4 hover:bg-white transition-colors flex items-center gap-2 justify-center"
              >
                <Icon name="Send" size={15} /> Оставить заявку
              </button>
              <a
                href="tel:+79051785769"
                className="border border-[hsl(38,30%,75%)] text-[hsl(38,35%,92%)] font-body text-sm font-medium px-8 py-4 hover:bg-white/10 transition-colors flex items-center gap-2 justify-center"
              >
                <Icon name="Phone" size={15} /> +7 (905) 178-57-69
              </a>
            </div>
          </div>
        </div>
      </section>

      <LeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        title="Выезд на ваш объект"
        subtitle="Назовите адрес — приедем с замерами и сметой"
      />
    </div>
  );
}
