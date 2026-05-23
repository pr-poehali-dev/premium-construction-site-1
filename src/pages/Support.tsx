import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";
import ContactForm from "@/components/ContactForm";

const HERO_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/15a63876-bf4c-453b-bee5-f4e384099a6b.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/15a63876-bf4c-453b-bee5-f4e384099a6b.jpg";

const stages = [
  {
    icon: "Phone",
    title: "1. Первый контакт",
    desc: "Принимаем звонок или заявку. Уточняем задачу, выезжаем на объект или проводим онлайн-консультацию. Бесплатно.",
  },
  {
    icon: "FileText",
    title: "2. Смета и проект",
    desc: "Составляем подробную смету, согласовываем материалы и сроки. Утверждаем договор — всё прозрачно.",
  },
  {
    icon: "Wrench",
    title: "3. Строительство",
    desc: "Работаем по согласованному плану. Прораб ведёт объект, делает еженедельные фотоотчёты.",
  },
  {
    icon: "CheckCircle",
    title: "4. Сдача объекта",
    desc: "Принимаем работы вместе с вами, устраняем замечания, передаём документы и ключи.",
  },
  {
    icon: "Shield",
    title: "5. Гарантийное обслуживание",
    desc: "5 лет гарантии. При любых вопросах — звоните, приедем и устраним бесплатно.",
  },
  {
    icon: "MessageCircle",
    title: "6. Консультации",
    desc: "Помогаем с выбором подрядчиков, поставщиков, советуем по уходу за домом. Остаёмся на связи.",
  },
];

const materials = [
  "Кирпич и керамоблок",
  "Газобетон Ytong и Hebel",
  "Металлочерепица Ruukki",
  "Гибкая черепица Tegola",
  "Гидроизоляция Технониколь",
  "Фасадные системы Knauf",
  "Напольные покрытия Tarkett",
  "Санфаянс Grohe / Roca",
];

export default function Support() {
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={INTERIOR_IMG} alt="Поддержка клиентов" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,72%)] mb-2">СтройДом</p>
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white">Поддержка клиентов</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,30%,55%)] mb-4">Наш подход</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(25,40%,22%)] leading-tight mb-6">
                Сопровождаем<br /><em>на каждом этапе</em>
              </h2>
              <p className="font-body text-sm text-[hsl(30,10%,42%)] leading-relaxed">
                Строительство дома — это сложный и длительный процесс. Мы понимаем, что для большинства клиентов это первый опыт. Именно поэтому мы выстроили систему поддержки, при которой клиент никогда не чувствует себя одиноким в этом процессе.
              </p>
            </div>
            <div className="reveal mt-10 lg:mt-0">
              <img src={HERO_IMG} alt="Сопровождение" className="w-full aspect-[16/9] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-20 bg-[hsl(38,25%,93%)]">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <h2 className="font-display text-4xl font-light text-[hsl(25,40%,22%)]">
              Как мы работаем
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(35,20%,83%)]">
            {stages.map((s, i) => (
              <div key={s.title} className={`reveal reveal-delay-${Math.min((i % 3) + 1, 5)} bg-[hsl(38,25%,93%)] p-8`}>
                <div className="w-10 h-10 bg-[hsl(28,38%,32%)] flex items-center justify-center mb-5">
                  <Icon name={s.icon} size={17} className="text-[hsl(38,40%,97%)]" fallback="Check" />
                </div>
                <h3 className="font-display text-xl font-medium text-[hsl(25,35%,20%)] mb-2">{s.title}</h3>
                <p className="font-body text-sm text-[hsl(30,10%,45%)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,30%,55%)] mb-4">Материалы</p>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-[hsl(25,40%,22%)] mb-5">
                Помогаем выбрать<br /><em>лучшее</em>
              </h2>
              <p className="font-body text-sm text-[hsl(30,10%,42%)] leading-relaxed mb-8">
                Работаем только с проверенными поставщиками. Помогаем подобрать материалы под бюджет и задачу — без переплат и некачественной продукции.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {materials.map((m) => (
                  <div key={m} className="flex items-center gap-2.5">
                    <Icon name="Check" size={13} className="text-[hsl(28,38%,42%)] shrink-0" />
                    <span className="font-body text-sm text-[hsl(25,20%,30%)]">{m}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal mt-10 lg:mt-0 space-y-4">
              {[
                { q: "Как я могу следить за ходом строительства?", a: "Прораб присылает еженедельные фотоотчёты. Вы также можете приехать на объект в любое время — мы приветствуем это." },
                { q: "Что если я захочу изменить проект в процессе?", a: "Корректировки возможны на любом этапе — просто обсуждаем, пересчитываем смету и фиксируем изменения документально." },
                { q: "Как работает гарантия?", a: "5 лет на все виды работ. При обращении выезжаем в течение 2-5 рабочих дней и устраняем проблему бесплатно." },
              ].map((item) => (
                <div key={item.q} className="border border-[hsl(35,20%,85%)] p-6">
                  <h4 className="font-body text-sm font-medium text-[hsl(25,25%,22%)] mb-2">{item.q}</h4>
                  <p className="font-body text-xs text-[hsl(30,10%,45%)] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(25,40%,20%)]">
        <div className="container max-w-3xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-10">
            <h2 className="font-display text-3xl lg:text-4xl font-light text-[hsl(38,35%,94%)] mb-3">Остались вопросы?</h2>
            <p className="font-body text-sm text-[hsl(30,15%,62%)]">Ответим на любой вопрос — бесплатно и без обязательств</p>
          </div>
          <div className="reveal bg-[hsl(25,35%,24%)] p-8">
            <ContactForm dark={true} title="" subtitle="Оставьте контакты — свяжемся в течение 30 минут" />
          </div>
        </div>
      </section>
    </div>
  );
}