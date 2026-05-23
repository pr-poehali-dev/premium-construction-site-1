import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const HERO_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f0768fb3-be33-4885-8c10-3c0948ff1aa7.jpg";

const certificates = [
  { title: "СРО Допуск к строительным работам", issuer: "Саморегулируемая организация", year: "2014", icon: "Shield" },
  { title: "Лицензия на проектирование зданий", issuer: "Министерство строительства РФ", year: "2016", icon: "FileText" },
  { title: "Сертификат ISO 9001:2015", issuer: "Система менеджмента качества", year: "2019", icon: "Award" },
  { title: "Сертификат кровельного специалиста", issuer: "Национальный кровельный союз", year: "2017", icon: "Triangle" },
  { title: "Диплом «Лучшая строительная компания»", issuer: "Строительная выставка Москва", year: "2022", icon: "Trophy" },
  { title: "Благодарственное письмо", issuer: "Администрация Московской области", year: "2023", icon: "Star" },
];

const achievements = [
  { num: "12", label: "лет на рынке" },
  { num: "700+", label: "завершённых объектов" },
  { num: "6", label: "лицензий и сертификатов" },
  { num: "3", label: "отраслевые награды" },
];

export default function Certificates() {
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={HERO_IMG} alt="Сертификаты" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,72%)] mb-2">СтройДом</p>
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white">Награды и сертификаты</h1>
        </div>
      </div>

      {/* Stats */}
      <section className="py-14 border-b border-[hsl(35,20%,87%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <div key={a.label} className={`reveal reveal-delay-${i + 1} text-center`}>
                <p className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)]">{a.num}</p>
                <p className="font-body text-xs text-[hsl(30,10%,50%)] mt-2">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,30%,55%)] mb-3">Документы</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)]">
              Наши лицензии<br /><em>и сертификаты</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((c, i) => (
              <div
                key={c.title}
                className={`reveal reveal-delay-${Math.min((i % 3) + 1, 5)} bg-white border border-[hsl(35,20%,87%)] p-8 flex flex-col hover-lift`}
              >
                <div className="w-12 h-12 bg-[hsl(38,30%,88%)] flex items-center justify-center mb-6">
                  <Icon name={c.icon} size={20} className="text-[hsl(28,38%,42%)]" fallback="Award" />
                </div>
                <h3 className="font-display text-xl font-medium text-[hsl(25,35%,20%)] mb-2 flex-1">{c.title}</h3>
                <div className="mt-5 pt-4 border-t border-[hsl(35,20%,88%)] flex items-center justify-between">
                  <p className="font-body text-xs text-[hsl(30,10%,50%)]">{c.issuer}</p>
                  <span className="font-body text-xs font-medium text-[hsl(28,38%,42%)] bg-[hsl(38,30%,88%)] px-2 py-0.5">{c.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Document notice */}
          <div className="reveal mt-12 bg-[hsl(38,30%,92%)] border border-[hsl(35,20%,85%)] p-6 flex items-start gap-4">
            <Icon name="Info" size={18} className="text-[hsl(28,38%,42%)] shrink-0 mt-0.5" />
            <div>
              <p className="font-body text-sm font-medium text-[hsl(25,30%,25%)] mb-1">Оригиналы документов</p>
              <p className="font-body text-xs text-[hsl(30,10%,45%)] leading-relaxed">
                Все оригиналы лицензий и сертификатов доступны для ознакомления в нашем офисе. Также можем прислать скан-копии по запросу — просто свяжитесь с нами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[hsl(38,25%,93%)]">
        <div className="container max-w-2xl mx-auto px-6 text-center reveal">
          <h2 className="font-display text-3xl font-light text-[hsl(25,40%,22%)] mb-4">Хотите работать с нами?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">
            <Link to="/contacts" className="bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm px-8 py-4 hover:bg-[hsl(25,40%,22%)] transition-colors flex items-center gap-2 justify-center">
              Оставить заявку <Icon name="ArrowRight" size={15} />
            </Link>
            <a href="tel:+79051785769" className="border border-[hsl(28,38%,42%)] text-[hsl(28,38%,38%)] font-body text-sm px-8 py-4 hover:bg-[hsl(38,30%,88%)] transition-colors flex items-center gap-2 justify-center">
              <Icon name="Phone" size={15} /> Позвонить
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}