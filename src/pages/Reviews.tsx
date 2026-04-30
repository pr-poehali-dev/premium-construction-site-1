import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const HERO_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/5adea300-6c1e-482c-9da3-7d04b8a4a030.jpg";

const reviews = [
  { name: "Андрей Семёнов", location: "Краснодар", service: "Строительство дома", year: "2024", stars: 5, text: "Строили дом 220 м² под ключ. Всё от проекта до сдачи — за 8 месяцев. Качество на уровне, смета не менялась ни разу. Прораб был всегда на связи, предупреждал о каждом этапе. Теперь рекомендуем всем знакомым." },
  { name: "Татьяна Ковалёва", location: "Горячий Ключ", service: "Кровля и фасад", year: "2023", stars: 5, text: "Делали кровлю и отделку фасада. Мастера аккуратные, работали быстро, убрали за собой. Рекомендую металлочерепицу — выглядит отлично. Осталась очень довольна результатом и сервисом." },
  { name: "Дмитрий Волков", location: "Краснодар", service: "Ремонт под ключ", year: "2024", stars: 5, text: "Капитальный ремонт квартиры 85 м² под ключ. Прораб всегда был на связи, объяснял каждый этап. Материалы помогли выбрать с умом — не переплатил. Результатом доволен — сделали качественно и точно в срок." },
  { name: "Наталья Громова", location: "Анапа", service: "Строительство дома", year: "2023", stars: 5, text: "Строительство дома из газобетона 160 м². Приятно удивила слаженность команды. Каждую неделю присылали фотоотчёт с объекта. Сдали дом в обещанные сроки — это редкость в строительстве." },
  { name: "Михаил Захаров", location: "Кореновск", service: "Фундамент", year: "2024", stars: 5, text: "Заказывал монолитный плитный фундамент. Сделали геологию участка, рассчитали всё правильно. Работали оперативно, без задержек. Через год после постройки — никаких трещин и осадок." },
  { name: "Елена Борисова", location: "Краснодар", service: "Отделка", year: "2024", stars: 5, text: "Внутренняя отделка дома 200 м². Выбор материалов вместе с дизайнером — это большой плюс. Качество штукатурки и покраски на высоте. Теперь каждый гость спрашивает, кто делал." },
];

const stats = [
  { num: "200+", label: "выполненных проектов" },
  { num: "4.9", label: "средняя оценка" },
  { num: "98%", label: "клиентов довольны" },
  { num: "150+", label: "рекомендаций" },
];

export default function Reviews() {
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={HERO_IMG} alt="Отзывы" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,72%)] mb-2">СтройДом</p>
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white">Отзывы клиентов</h1>
        </div>
      </div>

      {/* Stats */}
      <section className="py-14 border-b border-[hsl(35,20%,87%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className={`reveal reveal-delay-${i + 1} text-center`}>
                <p className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)]">{s.num}</p>
                <p className="font-body text-xs text-[hsl(30,10%,50%)] mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`reveal reveal-delay-${Math.min((i % 3) + 1, 5)} bg-[hsl(40,30%,97%)] border border-[hsl(35,20%,87%)] p-8 flex flex-col`}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, j) => (
                    <Icon key={j} name="Star" size={13} className="text-[hsl(38,80%,60%)]" />
                  ))}
                </div>
                <p className="font-body text-sm text-[hsl(25,15%,35%)] leading-relaxed italic flex-1">
                  "{r.text}"
                </p>
                <div className="mt-6 pt-5 border-t border-[hsl(35,20%,88%)]">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-body text-sm font-medium text-[hsl(25,25%,20%)]">{r.name}</p>
                      <p className="font-body text-xs text-[hsl(30,10%,55%)] flex items-center gap-1 mt-0.5">
                        <Icon name="MapPin" size={10} /> {r.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-body text-xs text-[hsl(28,30%,55%)] block">{r.service}</span>
                      <span className="font-body text-xs text-[hsl(30,10%,60%)] block mt-0.5">{r.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[hsl(38,25%,93%)]">
        <div className="container max-w-2xl mx-auto px-6 text-center reveal">
          <h2 className="font-display text-3xl font-light text-[hsl(25,40%,22%)] mb-4">Станьте нашим следующим довольным клиентом</h2>
          <p className="font-body text-sm text-[hsl(30,10%,45%)] mb-7">Оставьте заявку — начнём работу над вашим проектом</p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm px-8 py-4 hover:bg-[hsl(25,40%,22%)] transition-colors"
          >
            Обсудить проект <Icon name="ArrowRight" size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
