import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";
import ContactForm from "@/components/ContactForm";

const HERO_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f0768fb3-be33-4885-8c10-3c0948ff1aa7.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/7779dcd3-eeba-4f9a-9c09-eb1b0efc3bef.jpg";

const reasons = [
  {
    icon: "FileText",
    title: "Прозрачная смета",
    desc: "Составляем детальную смету до начала работ. Ни один рубль не появится без вашего согласования — обещаем и выполняем.",
  },
  {
    icon: "Clock",
    title: "Соблюдение сроков",
    desc: "Каждый договор фиксирует дату сдачи объекта. Если срок нарушен по нашей вине — компенсируем. За 12 лет — ни одного нарушения без предупреждения.",
  },
  {
    icon: "Shield",
    title: "Гарантия 5 лет",
    desc: "Гарантируем качество всех выполненных работ на 5 лет. При любых вопросах — выезжаем и исправляем бесплатно.",
  },
  {
    icon: "BadgeCheck",
    title: "Работа по договору",
    desc: "Все обязательства зафиксированы в официальном договоре. Никаких устных договорённостей — только документы.",
  },
  {
    icon: "Users",
    title: "Собственная команда",
    desc: "Не привлекаем субподрядчиков. Все работы выполняют наши проверенные специалисты — контроль качества на каждом этапе.",
  },
  {
    icon: "Award",
    title: "12 лет опыта",
    desc: "С 2012 года реализовали более 200 объектов в Краснодаре и крае. Знаем все нюансы местного строительства.",
  },
  {
    icon: "MessageCircle",
    title: "Открытая коммуникация",
    desc: "Еженедельные отчёты, фото с объекта, прораб всегда на связи. Вы знаете, что происходит на стройке, даже не приезжая.",
  },
  {
    icon: "Leaf",
    title: "Качественные материалы",
    desc: "Работаем только с проверенными поставщиками. Помогаем выбрать оптимальные материалы без переплаты.",
  },
];

export default function WhyUs() {
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={INTERIOR_IMG} alt="Почему мы" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,72%)] mb-2">СтройДом</p>
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white">Почему выбирают нас</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="reveal">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,30%,55%)] mb-4">Наша философия</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)] leading-tight mb-6">
                Репутация строится<br /><em>каждым объектом</em>
              </h2>
              <p className="font-body text-sm text-[hsl(30,10%,42%)] leading-relaxed">
                Мы не считаем себя просто строительной компанией. Мы создаём пространство, в котором будут жить люди — десятилетиями. Именно поэтому мы подходим к каждому проекту как к собственному дому: с полной ответственностью, вниманием к деталям и честностью перед клиентом.
              </p>
            </div>
            <div className="reveal mt-10 lg:mt-0">
              <img src={HERO_IMG} alt="Строительство" className="w-full aspect-[16/9] object-cover" />
            </div>
          </div>

          {/* Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(35,20%,85%)]">
            {reasons.map((r, i) => (
              <div key={r.title} className={`reveal reveal-delay-${Math.min((i % 4) + 1, 4)} bg-[hsl(40,30%,97%)] p-7`}>
                <div className="w-9 h-9 bg-[hsl(38,30%,88%)] flex items-center justify-center mb-5">
                  <Icon name={r.icon} size={16} className="text-[hsl(28,38%,38%)]" fallback="Check" />
                </div>
                <h3 className="font-display text-lg font-medium text-[hsl(25,35%,20%)] mb-2">{r.title}</h3>
                <p className="font-body text-xs text-[hsl(30,10%,48%)] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(25,40%,20%)]">
        <div className="container max-w-3xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-10">
            <h2 className="font-display text-3xl lg:text-4xl font-light text-[hsl(38,35%,94%)] mb-3">
              Убедитесь лично
            </h2>
            <p className="font-body text-sm text-[hsl(30,15%,62%)]">Оставьте заявку — покажем объекты, познакомим с командой</p>
          </div>
          <div className="reveal bg-[hsl(25,35%,24%)] p-8">
            <ContactForm dark={true} title="" />
          </div>
        </div>
      </section>
    </div>
  );
}