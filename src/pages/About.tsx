import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const HERO_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f0768fb3-be33-4885-8c10-3c0948ff1aa7.jpg";
const TEAM_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/7779dcd3-eeba-4f9a-9c09-eb1b0efc3bef.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/8cbe30ce-612e-4751-b860-64eb3cd8a53c.jpg";

const team = [
  { name: "Иван Кириллов", role: "Генеральный директор", exp: "18 лет в строительстве" },
  { name: "Алексей Петров", role: "Главный архитектор", exp: "Более 150 проектов" },
  { name: "Сергей Новиков", role: "Руководитель отдела кровли", exp: "Сертифицированный специалист" },
  { name: "Марина Соколова", role: "Проектный менеджер", exp: "Ведёт каждый объект лично" },
];

const milestones = [
  { year: "2012", event: "Основание компании СтройДом в Москве" },
  { year: "2015", event: "150 завершённых объектов в Подмосковье" },
  { year: "2018", event: "Расширение: запуск направления бани и беседки" },
  { year: "2021", event: "400+ объектов, работа по всей Московской области" },
  { year: "2024", event: "Более 700 объектов. Собственная проектная служба" },
];

export default function About() {
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={TEAM_IMG} alt="О компании" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,72%)] mb-2">СтройДом</p>
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white">О компании</h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="reveal">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,30%,55%)] mb-4">Наша история</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)] leading-tight mb-6">
                12 лет строим<br /><em>с душой</em>
              </h2>
              <div className="space-y-4 font-body text-base text-[hsl(30,15%,28%)] leading-relaxed">
                <p>
                  Компания «СтройДом» основана в 2012 году в Москве. Мы начинали с небольшой команды — три мастера и один прораб. Сегодня это слаженный коллектив из 80 специалистов, которые работают по всей Московской области.
                </p>
                <p>
                  Мы не гонимся за объёмом. Каждый объект для нас — это конкретная семья, которая доверила нам участок и свои планы. Именно поэтому мы сопровождаем клиента на каждом этапе — от первого звонка до сдачи работ.
                </p>
                <p>
                  За 12 лет мы выполнили более 700 объектов: кровли, фундаменты, фасады, бани, беседки, заборы и плиточные работы. Ни одна смета не выросла без предупреждения. Ни один срок не был сдвинут без причины.
                </p>
              </div>
            </div>
            <div className="reveal mt-10 lg:mt-0">
              <div className="relative">
                <img src={HERO_IMG} alt="История компании" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-[hsl(40,30%,97%)] border border-[hsl(35,20%,85%)] p-6 w-52">
                  <p className="font-display text-4xl font-light text-[hsl(25,40%,22%)]">2012</p>
                  <p className="font-body text-xs text-[hsl(30,10%,48%)] mt-1">год основания</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[hsl(38,25%,93%)]">
        <div className="container max-w-4xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-light text-[hsl(25,40%,22%)]">
              Ключевые <em>этапы пути</em>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[hsl(35,20%,82%)] hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex gap-8 items-start`}>
                  <div className="shrink-0 w-16 h-16 bg-[hsl(28,38%,32%)] text-[hsl(38,40%,97%)] flex items-center justify-center z-10 relative">
                    <span className="font-display text-sm font-medium">{m.year}</span>
                  </div>
                  <div className="pt-4 pb-2 border-b border-[hsl(35,20%,85%)] flex-1">
                    <p className="font-body text-sm text-[hsl(25,20%,30%)] leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,30%,55%)] mb-3">Люди</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)]">
              Наша команда
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={member.name} className={`reveal reveal-delay-${i + 1}`}>
                <div className="bg-[hsl(38,25%,91%)] aspect-[3/4] mb-4 overflow-hidden">
                  <img
                    src={i % 2 === 0 ? TEAM_IMG : INTERIOR_IMG}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <h3 className="font-display text-xl font-medium text-[hsl(25,35%,22%)]">{member.name}</h3>
                <p className="font-body text-sm text-[hsl(28,38%,42%)] mt-0.5">{member.role}</p>
                <p className="font-body text-xs text-[hsl(30,10%,52%)] mt-1">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-20 bg-[hsl(25,40%,20%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,25%,60%)] mb-4">География</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(38,35%,94%)] leading-tight mb-6">
                Работаем по<br /><em>всей области</em>
              </h2>
              <p className="font-body text-sm text-[hsl(30,15%,70%)] leading-relaxed mb-8">
                Основной офис в Москве. Выезжаем по всей Московской области — Истра, Одинцово, Красногорск, Мытищи, Подольск, Звенигород и другие города в радиусе до 100 км.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Москва", "Истра", "Одинцово", "Красногорск", "Мытищи", "Подольск", "Звенигород", "Раменское"].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <Icon name="MapPin" size={13} className="text-[hsl(28,30%,55%)]" />
                    <span className="font-body text-sm text-[hsl(38,25%,78%)]">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal mt-10 lg:mt-0 bg-[hsl(25,35%,24%)] p-8 flex items-center justify-center h-64">
              <div className="text-center">
                <Icon name="Map" size={32} className="text-[hsl(28,25%,55%)] mx-auto mb-3" />
                <p className="font-body text-sm text-[hsl(30,15%,60%)]">Москва и Московская область</p>
                <a href="https://yandex.ru/maps/?text=Москва" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-[hsl(28,30%,60%)] hover:text-[hsl(38,30%,75%)] underline underline-offset-2 mt-2 block transition-colors">
                  Открыть на карте →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[hsl(38,25%,93%)]">
        <div className="container max-w-2xl mx-auto px-6 text-center reveal">
          <h2 className="font-display text-3xl font-light text-[hsl(25,40%,22%)] mb-4">Готовы обсудить ваш проект?</h2>
          <p className="font-body text-sm text-[hsl(30,10%,45%)] mb-7">Звоните или пишите — отвечаем быстро</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+79051785769" className="bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm px-8 py-4 hover:bg-[hsl(25,40%,22%)] transition-colors flex items-center gap-2 justify-center">
              <Icon name="Phone" size={15} /> +7 (905) 178-57-69
            </a>
            <Link to="/contacts" className="border border-[hsl(28,38%,42%)] text-[hsl(28,38%,38%)] font-body text-sm px-8 py-4 hover:bg-[hsl(38,30%,88%)] transition-colors text-center">
              Написать нам
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}