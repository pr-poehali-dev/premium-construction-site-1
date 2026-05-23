import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const IMG = {
  hero: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f0768fb3-be33-4885-8c10-3c0948ff1aa7.jpg",
  roofing: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/8cbe30ce-612e-4751-b860-64eb3cd8a53c.jpg",
  foundation: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/7779dcd3-eeba-4f9a-9c09-eb1b0efc3bef.jpg",
  finishing: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/fd2ad54c-e8af-43f0-9cd1-eca823605af6.jpg",
  facade: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/73097157-2617-4816-a2a6-10b159cc60c3.jpg",
  fence: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/6d45dbd4-f15f-4a38-99ef-218d07804a53.jpg",
  paving: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/8826c6c4-46fe-4542-941f-24cb7a4bfbe8.jpg",
  gazebo: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/ce255a0d-623c-420d-82bd-bfa39cb99c8f.jpg",
  banya: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/27254a6c-9562-43b3-a982-d1f8e23cb3e3.jpg",
};

const filters = ["Все", "Кровля", "Фундамент", "Отделка", "Фасад", "Заборы", "Плитка", "Беседки", "Бани"];

const projects = [
  { title: "Кровля коттеджа 280 м²", location: "Истринский р-н", type: "Кровля", year: "2024", area: "280 м²", img: IMG.roofing },
  { title: "Баня из бревна 60 м²", location: "Одинцово", type: "Бани", year: "2023", area: "60 м²", img: IMG.banya },
  { title: "Мощение участка 450 м²", location: "Красногорск", type: "Плитка", year: "2024", area: "450 м²", img: IMG.paving },
  { title: "Вентфасад дома 320 м²", location: "Мытищи", type: "Фасад", year: "2024", area: "320 м²", img: IMG.facade },
  { title: "Кованый забор 80 п.м.", location: "Раменское", type: "Заборы", year: "2023", area: "80 п.м.", img: IMG.fence },
  { title: "Плитный фундамент 180 м²", location: "Подольск", type: "Фундамент", year: "2023", area: "180 м²", img: IMG.foundation },
  { title: "Беседка с террасой 40 м²", location: "Звенигород", type: "Беседки", year: "2024", area: "40 м²", img: IMG.gazebo },
  { title: "Штукатурка фасада 240 м²", location: "Балашиха", type: "Отделка", year: "2024", area: "240 м²", img: IMG.finishing },
  { title: "Каркасная баня 35 м²", location: "Дмитров", type: "Бани", year: "2023", area: "35 м²", img: IMG.banya },
  { title: "Брусчатка дорожек 280 м²", location: "Серпухов", type: "Плитка", year: "2024", area: "280 м²", img: IMG.paving },
  { title: "Свайно-винтовой фундамент", location: "Чехов", type: "Фундамент", year: "2024", area: "150 м²", img: IMG.foundation },
  { title: "Мягкая кровля 180 м²", location: "Видное", type: "Кровля", year: "2023", area: "180 м²", img: IMG.roofing },
];

export default function Portfolio() {
  const [active, setActive] = useState("Все");
  useReveal();

  const filtered = active === "Все" ? projects : projects.filter((p) => p.type === active);

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={IMG.hero} alt="Наши работы" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,75%)] mb-2">СтройДом</p>
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
                className={`font-body text-sm font-medium px-5 py-2 border transition-colors ${
                  active === f
                    ? "bg-[hsl(28,38%,32%)] text-[hsl(38,40%,97%)] border-[hsl(28,38%,32%)]"
                    : "bg-transparent text-[hsl(25,25%,25%)] border-[hsl(35,20%,82%)] hover:border-[hsl(28,38%,42%)]"
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
                    <span className="font-body text-xs font-semibold text-[hsl(28,42%,28%)] tracking-wide uppercase">{p.type}</span>
                    <span className="font-body text-xs text-[hsl(30,15%,40%)]">{p.area}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-[hsl(25,35%,18%)]">{p.title}</h3>
                  <p className="font-body text-xs text-[hsl(30,15%,38%)] flex items-center gap-1 mt-1.5">
                    <Icon name="MapPin" size={11} /> {p.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-base text-[hsl(30,15%,40%)]">Пока нет проектов в этой категории</p>
            </div>
          )}

          {/* CTA */}
          <div className="reveal mt-16 text-center">
            <p className="font-body text-sm text-[hsl(30,15%,32%)] mb-5">Хотите реализовать похожий проект?</p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm font-medium px-8 py-4 hover:bg-[hsl(25,40%,22%)] transition-colors"
            >
              Обсудить проект <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
