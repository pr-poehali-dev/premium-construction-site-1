import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ContactForm from "@/components/ContactForm";
import { useReveal } from "@/hooks/useReveal";

const IMG = {
  hero: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f0768fb3-be33-4885-8c10-3c0948ff1aa7.jpg",
  roofing: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/8cbe30ce-612e-4751-b860-64eb3cd8a53c.jpg",
  foundation: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/7779dcd3-eeba-4f9a-9c09-eb1b0efc3bef.jpg",
  finishing: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/fd2ad54c-e8af-43f0-9cd1-eca823605af6.jpg",
  facade: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/73097157-2617-4816-a2a6-10b159cc60c3.jpg",
  fence: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/5f0bcd01-60b3-4f52-abc2-6fa4b01904a5.jpg",
  paving: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/8826c6c4-46fe-4542-941f-24cb7a4bfbe8.jpg",
  gazebo: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f7e40318-a5d3-49d3-8622-3bcd2e996e6e.jpg",
  banya: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/fbdf1b16-d369-498c-9d04-193c2a9f0bcf.jpg",
};

const services = [
  { icon: "Triangle", title: "Кровельные работы", desc: "Монтаж, ремонт и замена любых видов кровли", href: "/services/roofing", img: IMG.roofing },
  { icon: "Layers", title: "Фундаментные работы", desc: "Ленточный, плитный, свайный фундамент под любой проект", href: "/services/foundation", img: IMG.foundation },
  { icon: "Brush", title: "Отделочные работы", desc: "Внешняя отделка фасадов и сопутствующие работы", href: "/services/finishing", img: IMG.finishing },
  { icon: "Building2", title: "Фасадные работы", desc: "Вентилируемые фасады, штукатурка, облицовка", href: "/services/facade", img: IMG.facade },
  { icon: "Fence", title: "Заборы и ограждения", desc: "Металлические, кирпичные, кованые, профнастил", href: "/services/fence", img: IMG.fence },
  { icon: "Grid3x3", title: "Уличные плиточные работы", desc: "Тротуарная плитка, брусчатка, мощение дорожек", href: "/services/paving", img: IMG.paving },
  { icon: "TreePine", title: "Беседки и террасы", desc: "Деревянные беседки, террасы, перголы под ключ", href: "/services/gazebo", img: IMG.gazebo },
  { icon: "Flame", title: "Бани", desc: "Бани из бруса, бревна, каркасные — под ключ", href: "/services/banya", img: IMG.banya },
];

const portfolio = [
  { title: "Кровля коттеджа 280 м²", location: "Истринский р-н", type: "Кровельные работы", img: IMG.roofing },
  { title: "Баня из бревна 60 м²", location: "Одинцово", type: "Бани", img: IMG.banya },
  { title: "Мощение участка 450 м²", location: "Красногорск", type: "Плиточные работы", img: IMG.paving },
];

const advantages = [
  { num: "12", label: "лет опыта", icon: "Award" },
  { num: "700+", label: "выполненных объектов", icon: "Home" },
  { num: "100%", label: "работа по договору", icon: "FileText" },
  { num: "5 лет", label: "гарантия на работы", icon: "Shield" },
  { num: "0₽", label: "скрытых платежей", icon: "BadgeCheck" },
  { num: "вовремя", label: "соблюдение сроков", icon: "Clock" },
];

const reviews = [
  {
    name: "Андрей Семёнов",
    location: "Истра",
    text: "Делали кровлю на коттедж — металлочерепица. Всё от замеров до сдачи — за 3 недели. Качество на уровне, смета не менялась. Теперь рекомендуем всем знакомым.",
    year: "2024",
  },
  {
    name: "Татьяна Ковалёва",
    location: "Одинцово",
    text: "Строили баню из бревна 50 м². Мастера аккуратные, работали быстро, убрали за собой. Осталась очень довольна результатом — всё точно по проекту.",
    year: "2023",
  },
  {
    name: "Дмитрий Волков",
    location: "Красногорск",
    text: "Заказывал мощение участка тротуарной плиткой плюс забор из профнастила. Прораб всегда был на связи, объяснял каждый этап. Сделали качественно и в срок.",
    year: "2024",
  },
];

export default function Index() {
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen">

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] max-h-[900px] overflow-hidden grain-overlay">
        <img
          src={IMG.hero}
          alt="Строительные работы в Москве и Московской области"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.55) saturate(0.85)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" style={{ zIndex: 2 }} />
        <div className="relative h-full flex flex-col justify-end pb-20 lg:pb-28 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 3 }}>
          <div className="max-w-2xl">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[hsl(38,35%,80%)] mb-6 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
              Москва и Московская область
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
              Строительные работы<br />
              <em className="font-normal">для загородного дома</em>
            </h1>
            <p className="font-body text-base lg:text-lg text-[hsl(38,25%,82%)] leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
              12 лет опыта. Более 700 реализованных объектов.<br />
              Кровля, фундамент, фасад, бани, беседки, заборы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}>
              <Link
                to="/contacts"
                className="bg-[hsl(38,40%,97%)] text-[hsl(25,40%,22%)] font-body text-sm font-medium px-8 py-4 tracking-wide hover:bg-white transition-colors duration-200 text-center"
              >
                Рассчитать стоимость
              </Link>
              <Link
                to="/contacts"
                className="border border-[hsl(38,30%,75%)] text-[hsl(38,35%,92%)] font-body text-sm font-medium px-8 py-4 tracking-wide hover:bg-white/10 transition-colors duration-200 text-center"
              >
                Получить консультацию
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-14 flex items-center gap-10 border-t border-white/15 pt-8 animate-fade-up" style={{ animationDelay: "1s", opacity: 0, animationFillMode: "forwards" }}>
            {[
              { num: "12", label: "лет опыта" },
              { num: "700+", label: "объектов" },
              { num: "5 лет", label: "гарантия" },
            ].map((s) => (
              <div key={s.num} className="flex flex-col">
                <span className="font-display text-3xl font-light text-white">{s.num}</span>
                <span className="font-body text-xs text-[hsl(38,25%,72%)] tracking-wide mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-[hsl(40,30%,97%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="reveal">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,42%,32%)] mb-3">Что мы делаем</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)] leading-tight">
                Полный спектр<br /><em>строительных услуг</em>
              </h2>
            </div>
            <Link
              to="/services"
              className="reveal font-body text-sm text-[hsl(28,42%,28%)] hover:text-[hsl(25,40%,22%)] transition-colors flex items-center gap-2 self-end lg:self-auto"
            >
              Все услуги <Icon name="ArrowRight" size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(35,20%,85%)]">
            {services.map((s, i) => (
              <Link
                to={s.href}
                key={s.title}
                className={`reveal reveal-delay-${Math.min((i % 4) + 1, 5)} bg-[hsl(40,30%,97%)] hover-lift group block overflow-hidden`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[hsl(38,25%,90%)]">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={s.icon} size={11} className="text-[hsl(28,42%,32%)]" fallback="Home" />
                    <span className="font-body text-[10px] tracking-[0.18em] uppercase text-[hsl(28,42%,32%)]">Услуга</span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-[hsl(25,35%,18%)] mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-[hsl(30,15%,35%)] leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 lg:py-32 bg-[hsl(38,25%,93%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="reveal">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,42%,32%)] mb-3">Реализованные проекты</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)] leading-tight">
                Примеры<br /><em>наших работ</em>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="reveal font-body text-sm text-[hsl(28,42%,28%)] hover:text-[hsl(25,40%,22%)] transition-colors flex items-center gap-2 self-end lg:self-auto"
            >
              Смотреть все проекты <Icon name="ArrowRight" size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <Link
                to="/portfolio"
                key={p.title}
                className={`reveal reveal-delay-${i + 1} group relative overflow-hidden block cursor-pointer`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 px-1">
                  <p className="font-body text-xs text-[hsl(28,42%,32%)] tracking-wide font-medium">{p.type}</p>
                  <h3 className="font-display text-xl font-medium text-[hsl(25,35%,18%)] mt-1">{p.title}</h3>
                  <p className="font-body text-xs text-[hsl(30,15%,38%)] flex items-center gap-1 mt-1">
                    <Icon name="MapPin" size={11} /> {p.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 lg:py-32 bg-[hsl(40,30%,97%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <div className="reveal">
                <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,42%,32%)] mb-3">Наши преимущества</p>
                <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)] leading-tight mb-6">
                  Почему выбирают<br /><em>именно нас</em>
                </h2>
                <p className="font-body text-sm lg:text-base text-[hsl(30,15%,32%)] leading-relaxed mb-10">
                  За 12 лет мы выстроили репутацию на качестве и честности. Каждый объект — это не просто работа, это долгосрочная ответственность перед клиентом.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {advantages.map((a, i) => (
                  <div key={a.label} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={a.icon} size={16} className="text-[hsl(28,42%,32%)]" fallback="Check" />
                      <span className="font-display text-2xl font-medium text-[hsl(25,40%,22%)]">{a.num}</span>
                    </div>
                    <p className="font-body text-sm text-[hsl(30,15%,35%)]">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal mt-12 lg:mt-0">
              <div className="relative">
                <img
                  src={IMG.foundation}
                  alt="Наша команда"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-[hsl(28,38%,32%)] text-[hsl(38,40%,97%)] p-6 w-48">
                  <p className="font-display text-4xl font-light">700+</p>
                  <p className="font-body text-xs tracking-wide text-[hsl(38,25%,80%)] mt-1">выполненных объектов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 lg:py-32 bg-[hsl(38,25%,93%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,42%,32%)] mb-3">Отзывы клиентов</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)]">
              Нам доверяют
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`reveal reveal-delay-${i + 1} bg-[hsl(40,30%,97%)] p-8 border border-[hsl(35,20%,87%)]`}
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} name="Star" size={13} className="text-[hsl(38,80%,55%)]" />
                  ))}
                </div>
                <p className="font-body text-sm text-[hsl(25,20%,25%)] leading-relaxed mb-6 italic">
                  "{r.text}"
                </p>
                <div className="flex items-center justify-between border-t border-[hsl(35,20%,88%)] pt-5">
                  <div>
                    <p className="font-body text-sm font-semibold text-[hsl(25,30%,15%)]">{r.name}</p>
                    <p className="font-body text-xs text-[hsl(30,15%,40%)] flex items-center gap-1 mt-0.5">
                      <Icon name="MapPin" size={10} /> {r.location}
                    </p>
                  </div>
                  <span className="font-body text-xs text-[hsl(30,15%,45%)]">{r.year}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal text-center mt-10">
            <Link
              to="/reviews"
              className="font-body text-sm text-[hsl(28,42%,28%)] hover:text-[hsl(25,40%,22%)] transition-colors flex items-center gap-2 justify-center"
            >
              Все отзывы <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[hsl(25,40%,20%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="reveal mb-12 lg:mb-0">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,25%,65%)] mb-4">Начнём?</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(38,35%,94%)] leading-tight mb-6">
                Рассчитайте стоимость<br />
                <em>вашего проекта</em>
              </h2>
              <p className="font-body text-sm text-[hsl(30,15%,70%)] leading-relaxed mb-8">
                Оставьте заявку — и мы подготовим подробную смету и план работ бесплатно. Свяжемся в течение 30 минут.
              </p>
              <div className="flex flex-col gap-4">
                <a href="tel:+74951234567" className="flex items-center gap-3 text-[hsl(38,30%,88%)] hover:text-white transition-colors">
                  <Icon name="Phone" size={16} className="text-[hsl(28,25%,60%)]" />
                  <span className="font-body text-base">+7 (495) 123-45-67</span>
                </a>
                <a href="https://wa.me/74951234567" className="flex items-center gap-3 text-[hsl(38,30%,88%)] hover:text-white transition-colors">
                  <Icon name="MessageCircle" size={16} className="text-[hsl(28,25%,60%)]" />
                  <span className="font-body text-base">WhatsApp / Telegram</span>
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay-2 bg-[hsl(25,35%,24%)] p-8 lg:p-10">
              <ContactForm dark={true} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}