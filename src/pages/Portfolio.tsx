import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const HERO_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/5adea300-6c1e-482c-9da3-7d04b8a4a030.jpg";
const TEAM_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/88ebd906-de8f-454e-800f-6639c25ccb6c.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/5ff15261-59a4-4793-9d31-6ab79f6af360.jpg";

const filters = ["Все", "Строительство", "Кровля", "Фундамент", "Отделка", "Ремонт", "Коммерция"];

const projects = [
  { title: "Коттедж 280 м²", location: "Краснодар, Юбилейный", type: "Строительство", year: "2024", area: "280 м²", img: HERO_IMG },
  { title: "Загородный дом 190 м²", location: "пос. Знаменский", type: "Строительство", year: "2023", area: "190 м²", img: INTERIOR_IMG },
  { title: "Жилой дом 240 м²", location: "Краснодар, Гидростроителей", type: "Строительство", year: "2024", area: "240 м²", img: TEAM_IMG },
  { title: "Ремонт квартиры 90 м²", location: "Краснодар, Центр", type: "Ремонт", year: "2024", area: "90 м²", img: INTERIOR_IMG },
  { title: "Кровля складского комплекса", location: "Краснодар, Прикубанский р-н", type: "Кровля", year: "2023", area: "1200 м²", img: TEAM_IMG },
  { title: "Фундамент под дом 350 м²", location: "Горячий Ключ", type: "Фундамент", year: "2023", area: "350 м²", img: HERO_IMG },
  { title: "Отделка фасада", location: "Анапа", type: "Отделка", year: "2024", area: "420 м²", img: INTERIOR_IMG },
  { title: "Офисный центр 800 м²", location: "Краснодар, Центр", type: "Коммерция", year: "2023", area: "800 м²", img: TEAM_IMG },
  { title: "Дом из газобетона 170 м²", location: "Кореновск", type: "Строительство", year: "2024", area: "170 м²", img: HERO_IMG },
];

export default function Portfolio() {
  const [active, setActive] = useState("Все");
  useReveal();

  const filtered = active === "Все" ? projects : projects.filter((p) => p.type === active);

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={HERO_IMG} alt="Наши работы" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,72%)] mb-2">СтройДом</p>
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white">Наши работы</h1>
        </div>
      </div>

      <div className="py-14 lg:py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-body text-sm px-5 py-2 border transition-colors ${
                  active === f
                    ? "bg-[hsl(28,38%,32%)] text-[hsl(38,40%,97%)] border-[hsl(28,38%,32%)]"
                    : "bg-transparent text-[hsl(25,20%,35%)] border-[hsl(35,20%,82%)] hover:border-[hsl(28,38%,42%)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={p.title + i}
                className={`reveal reveal-delay-${Math.min((i % 3) + 1, 5)} group overflow-hidden`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[hsl(28,38%,32%)] text-[hsl(38,40%,97%)] font-body text-xs px-3 py-1">
                    {p.year}
                  </div>
                </div>
                <div className="pt-4 pb-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-body text-xs text-[hsl(28,30%,55%)] tracking-wide uppercase">{p.type}</span>
                    <span className="font-body text-xs text-[hsl(30,10%,55%)]">{p.area}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-[hsl(25,35%,20%)]">{p.title}</h3>
                  <p className="font-body text-xs text-[hsl(30,10%,52%)] flex items-center gap-1 mt-1.5">
                    <Icon name="MapPin" size={11} /> {p.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-base text-[hsl(30,10%,50%)]">Пока нет проектов в этой категории</p>
            </div>
          )}

          {/* CTA */}
          <div className="reveal mt-16 text-center">
            <p className="font-body text-sm text-[hsl(30,10%,45%)] mb-5">Хотите реализовать похожий проект?</p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm px-8 py-4 hover:bg-[hsl(25,40%,22%)] transition-colors"
            >
              Обсудить проект <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
