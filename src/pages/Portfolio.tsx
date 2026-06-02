import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const IMG = {
  hero: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f0768fb3-be33-4885-8c10-3c0948ff1aa7.jpg",
  // Кровля
  roof1: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/8cbe30ce-612e-4751-b860-64eb3cd8a53c.jpg",
  roof2: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/c61798d8-8dd9-4467-a007-7fd9a44684bc.jpg",
  roof3: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/8c012b77-8827-469f-b404-63d2871e1ce1.jpg",
  roof4: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/b7c9a1af-f23b-4f16-8a6f-3906d2e8a0df.jpg",
  // Фундамент
  found1: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/7779dcd3-eeba-4f9a-9c09-eb1b0efc3bef.jpg",
  found2: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/967b723e-4651-4481-afed-a57949dec153.jpg",
  found3: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/4bec3041-9fa3-4885-9965-08124445856e.jpg",
  found4: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/08f7edee-c889-4e0d-8c27-b0e65cbf3094.jpg",
  // Отделка
  fin1: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/fd2ad54c-e8af-43f0-9cd1-eca823605af6.jpg",
  fin2: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/66ad8dfd-6d0b-4b3a-a536-d30ed58672e8.jpg",
  fin3: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/fd6dc8e5-4e04-4562-a75b-1a84b144428e.jpg",
  // Фасад
  fac1: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/73097157-2617-4816-a2a6-10b159cc60c3.jpg",
  fac2: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/225e6f48-00f0-4600-a601-6b9611b1776e.jpg",
  fac3: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/a887f933-b8ac-4adc-b452-1f6573e5b17f.jpg",
  fac4: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/fbcf8a38-3a2e-4842-a91b-8f0ba179d26d.jpg",
  // Заборы
  fence1: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/5f0bcd01-60b3-4f52-abc2-6fa4b01904a5.jpg",
  fence2: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/faf2563c-8d0c-48b5-8fe7-db3b70bf86c2.jpg",
  fence3: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/d78de1f4-41c1-4dfe-b524-5a64fd03a21e.jpg",
  fence4: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/a1f69ee4-bb8d-4a1a-b4f7-0d4995ea5320.jpg",
  // Плитка
  pav1: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/8826c6c4-46fe-4542-941f-24cb7a4bfbe8.jpg",
  pav2: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/ab3cea9f-62df-44ff-9a8a-b01be9963285.jpg",
  pav3: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/c41ea330-0b67-4f5e-9011-a1d69256c596.jpg",
  pav4: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f0f84618-e1cb-4952-b3de-419fa163f832.jpg",
  // Беседки
  gaz1: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f7e40318-a5d3-49d3-8622-3bcd2e996e6e.jpg",
  gaz2: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/045d5512-c9b7-4c0b-9574-9d37ccac8c49.jpg",
  gaz3: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/9db0ff12-cfbc-4689-88c0-01b64d3a798b.jpg",
  ext1: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/028135ef-4160-4674-b4ae-f0d658974fb0.jpg",
  // Бани
  ban1: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/fbdf1b16-d369-498c-9d04-193c2a9f0bcf.jpg",
  ban2: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/d7877416-dd27-4a1c-8213-7d7d5b50765f.jpg",
  ban3: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/454c9402-e044-447d-a763-809305b31a1a.jpg",
};

const filters = ["Все", "Кровля", "Фундамент", "Отделка", "Фасад", "Заборы", "Плитка", "Беседки", "Бани"];

const projects = [
  // Кровля (4)
  { title: "Металлочерепица 280 м²", location: "Истринский р-н", type: "Кровля", year: "2024", area: "280 м²", img: IMG.roof1 },
  { title: "Фальцевая кровля 220 м²", location: "Дмитровский р-н", type: "Кровля", year: "2024", area: "220 м²", img: IMG.roof2 },
  { title: "Мягкая кровля 180 м²", location: "Видное", type: "Кровля", year: "2023", area: "180 м²", img: IMG.roof3 },
  { title: "Керамочерепица 340 м²", location: "Рублёво-Успенское ш.", type: "Кровля", year: "2024", area: "340 м²", img: IMG.roof4 },
  // Фундамент (4)
  { title: "Плитный фундамент 180 м²", location: "Подольск", type: "Фундамент", year: "2023", area: "180 м²", img: IMG.found4 },
  { title: "Ленточный фундамент 240 м²", location: "Наро-Фоминск", type: "Фундамент", year: "2024", area: "240 м²", img: IMG.found2 },
  { title: "Свайно-винтовой фундамент", location: "Чехов", type: "Фундамент", year: "2024", area: "150 м²", img: IMG.found3 },
  { title: "Монолитный фундамент 200 м²", location: "Долгопрудный", type: "Фундамент", year: "2023", area: "200 м²", img: IMG.found1 },
  // Отделка (3)
  { title: "Декоративная штукатурка 240 м²", location: "Балашиха", type: "Отделка", year: "2024", area: "240 м²", img: IMG.fin1 },
  { title: "Покраска фасада 320 м²", location: "Лобня", type: "Отделка", year: "2024", area: "320 м²", img: IMG.fin2 },
  { title: "Облицовка камнем 180 м²", location: "Сергиев Посад", type: "Отделка", year: "2023", area: "180 м²", img: IMG.fin3 },
  // Фасад (4)
  { title: "Вентфасад дома 320 м²", location: "Мытищи", type: "Фасад", year: "2024", area: "320 м²", img: IMG.fac1 },
  { title: "Композитные панели 260 м²", location: "Реутов", type: "Фасад", year: "2024", area: "260 м²", img: IMG.fac2 },
  { title: "Клинкерный кирпич 380 м²", location: "Жуковский", type: "Фасад", year: "2023", area: "380 м²", img: IMG.fac3 },
  { title: "Реконструкция фасада 420 м²", location: "Зеленоград", type: "Фасад", year: "2024", area: "420 м²", img: IMG.fac4 },
  // Заборы (4)
  { title: "Деревянный забор 120 п.м.", location: "Раменское", type: "Заборы", year: "2024", area: "120 п.м.", img: IMG.fence1 },
  { title: "Забор из профнастила 95 п.м.", location: "Электросталь", type: "Заборы", year: "2024", area: "95 п.м.", img: IMG.fence2 },
  { title: "Кирпичный забор с воротами", location: "Рублёвка", type: "Заборы", year: "2023", area: "140 п.м.", img: IMG.fence3 },
  { title: "Металлоштакетник 110 п.м.", location: "Щёлково", type: "Заборы", year: "2024", area: "110 п.м.", img: IMG.fence4 },
  // Плитка (4)
  { title: "Брусчатка двора 450 м²", location: "Красногорск", type: "Плитка", year: "2024", area: "450 м²", img: IMG.pav1 },
  { title: "Подъездная дорожка 180 м²", location: "Химки", type: "Плитка", year: "2024", area: "180 м²", img: IMG.pav2 },
  { title: "Декоративное мощение 280 м²", location: "Серпухов", type: "Плитка", year: "2024", area: "280 м²", img: IMG.pav3 },
  { title: "Терраса из керамогранита", location: "Одинцово", type: "Плитка", year: "2023", area: "90 м²", img: IMG.pav4 },
  // Беседки (4)
  { title: "Пристройка к дому 32 м²", location: "Красногорск", type: "Беседки", year: "2024", area: "32 м²", img: IMG.ext1 },
  { title: "Беседка с террасой 40 м²", location: "Звенигород", type: "Беседки", year: "2024", area: "40 м²", img: IMG.gaz1 },
  { title: "Беседка с мангалом 35 м²", location: "Истра", type: "Беседки", year: "2024", area: "35 м²", img: IMG.gaz2 },
  { title: "Терраса при доме 55 м²", location: "Пушкино", type: "Беседки", year: "2023", area: "55 м²", img: IMG.gaz3 },
  // Бани (3)
  { title: "Баня из бревна 60 м²", location: "Одинцово", type: "Бани", year: "2023", area: "60 м²", img: IMG.ban1 },
  { title: "Баня с террасой 45 м²", location: "Солнечногорск", type: "Бани", year: "2024", area: "45 м²", img: IMG.ban2 },
  { title: "Двухэтажная баня 80 м²", location: "Клин", type: "Бани", year: "2024", area: "80 м²", img: IMG.ban3 },
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