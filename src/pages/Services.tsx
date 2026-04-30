import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ContactForm from "@/components/ContactForm";
import { useReveal } from "@/hooks/useReveal";

const HERO_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/5adea300-6c1e-482c-9da3-7d04b8a4a030.jpg";
const TEAM_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/88ebd906-de8f-454e-800f-6639c25ccb6c.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/5ff15261-59a4-4793-9d31-6ab79f6af360.jpg";

const services = [
  {
    id: "houses",
    icon: "Home",
    title: "Строительство домов",
    desc: "Строим жилые дома любой сложности — от загородных коттеджей до городских особняков. Полный цикл: проектирование, фундамент, коробка, кровля, отделка.",
    stages: ["Разработка проекта и сметы", "Подготовка участка и фундамент", "Возведение коробки дома", "Кровельные работы", "Внешняя отделка", "Внутренняя отделка и инженерия"],
    img: HERO_IMG,
    price: "от 35 000 ₽/м²",
  },
  {
    id: "roofing",
    icon: "Triangle",
    title: "Кровельные работы",
    desc: "Монтаж, ремонт и полная замена кровли. Работаем с металлочерепицей, профнастилом, мягкой кровлей, натуральной черепицей.",
    stages: ["Обследование и замеры", "Расчёт материалов", "Демонтаж старой кровли", "Монтаж стропильной системы", "Укладка кровельного материала", "Финальная проверка"],
    img: TEAM_IMG,
    price: "от 1 200 ₽/м²",
  },
  {
    id: "foundation",
    icon: "Layers",
    title: "Фундаментные работы",
    desc: "Проектируем и строим фундаменты под любые условия — ленточные, плитные, свайные, комбинированные. Геология и расчёт включены.",
    stages: ["Геологические изыскания", "Проектирование фундамента", "Земляные работы", "Установка опалубки", "Армирование и бетонирование", "Гидроизоляция и засыпка"],
    img: INTERIOR_IMG,
    price: "от 15 000 ₽/м²",
  },
  {
    id: "finishing",
    icon: "Brush",
    title: "Отделочные работы",
    desc: "Внутренняя и внешняя отделка любой сложности. Штукатурка, покраска, облицовка, укладка плитки и напольных покрытий.",
    stages: ["Подготовка поверхностей", "Черновая отделка", "Чистовая отделка стен и потолков", "Напольные покрытия", "Установка плинтусов и молдингов", "Финальная уборка"],
    img: HERO_IMG,
    price: "от 3 500 ₽/м²",
  },
  {
    id: "renovation",
    icon: "Wrench",
    title: "Ремонт под ключ",
    desc: "Полный ремонт квартир, домов и коммерческих помещений. От демонтажа до финальной уборки — всё берём на себя.",
    stages: ["Дизайн-проект", "Демонтажные работы", "Черновые работы", "Разводка инженерии", "Чистовая отделка", "Меблировка и декор"],
    img: INTERIOR_IMG,
    price: "от 8 000 ₽/м²",
  },
  {
    id: "commercial",
    icon: "Building2",
    title: "Коммерческое строительство",
    desc: "Строительство производственных объектов, складов, торговых и офисных зданий. Проектирование, согласование, строительство.",
    stages: ["Технический проект", "Получение разрешений", "Подготовка участка", "Строительство конструктива", "Инженерные системы", "Отделка и благоустройство"],
    img: TEAM_IMG,
    price: "от 25 000 ₽/м²",
  },
];

export default function Services() {
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Page header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={HERO_IMG} alt="Услуги" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,72%)] mb-2">СтройДом</p>
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white">Наши услуги</h1>
        </div>
      </div>

      {/* Services list */}
      <div className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`reveal lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className={`mt-8 lg:mt-0 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <div className="w-10 h-10 bg-[hsl(38,30%,88%)] flex items-center justify-center mb-6">
                  <Icon name={s.icon} size={18} className="text-[hsl(28,38%,38%)]" fallback="Home" />
                </div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <h2 className="font-display text-3xl lg:text-4xl font-light text-[hsl(25,40%,22%)]">{s.title}</h2>
                  <span className="font-body text-sm font-medium text-[hsl(28,38%,42%)] bg-[hsl(38,30%,88%)] px-3 py-1">{s.price}</span>
                </div>
                <p className="font-body text-sm text-[hsl(30,10%,45%)] leading-relaxed mb-8">{s.desc}</p>
                <div className="space-y-2.5 mb-8">
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-[hsl(28,30%,55%)] mb-4">Этапы работ</p>
                  {s.stages.map((stage, j) => (
                    <div key={stage} className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-[hsl(28,38%,42%)] text-white flex items-center justify-center font-body text-[10px] shrink-0">{j + 1}</span>
                      <span className="font-body text-sm text-[hsl(25,20%,30%)]">{stage}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contacts"
                  className="inline-flex items-center gap-2 bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm px-7 py-3.5 hover:bg-[hsl(25,40%,22%)] transition-colors"
                >
                  Оставить заявку <Icon name="ArrowRight" size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-[hsl(25,40%,20%)]">
        <div className="container max-w-3xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-10">
            <h2 className="font-display text-3xl lg:text-4xl font-light text-[hsl(38,35%,94%)] mb-3">Нужна консультация?</h2>
            <p className="font-body text-sm text-[hsl(30,15%,62%)]">Опишите задачу — подберём оптимальное решение и смету</p>
          </div>
          <div className="reveal bg-[hsl(25,35%,24%)] p-8">
            <ContactForm dark={true} title="" />
          </div>
        </div>
      </section>
    </div>
  );
}
