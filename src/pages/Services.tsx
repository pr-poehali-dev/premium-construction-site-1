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
  fence: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/6d45dbd4-f15f-4a38-99ef-218d07804a53.jpg",
  paving: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/8826c6c4-46fe-4542-941f-24cb7a4bfbe8.jpg",
  gazebo: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/ce255a0d-623c-420d-82bd-bfa39cb99c8f.jpg",
  banya: "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/27254a6c-9562-43b3-a982-d1f8e23cb3e3.jpg",
};

const services = [
  {
    id: "roofing",
    icon: "Triangle",
    title: "Кровельные работы",
    desc: "Монтаж, ремонт и полная замена кровли. Работаем с металлочерепицей, профнастилом, мягкой кровлей, натуральной черепицей.",
    stages: ["Обследование и замеры", "Расчёт материалов", "Демонтаж старой кровли", "Монтаж стропильной системы", "Укладка кровельного материала", "Финальная проверка"],
    img: IMG.roofing,
    price: "от 1 200 ₽/м²",
  },
  {
    id: "foundation",
    icon: "Layers",
    title: "Фундаментные работы",
    desc: "Проектируем и строим фундаменты под любые условия — ленточные, плитные, свайные, комбинированные. Геология и расчёт включены.",
    stages: ["Геологические изыскания", "Проектирование фундамента", "Земляные работы", "Установка опалубки", "Армирование и бетонирование", "Гидроизоляция и засыпка"],
    img: IMG.foundation,
    price: "от 15 000 ₽/м²",
  },
  {
    id: "finishing",
    icon: "Brush",
    title: "Отделочные работы",
    desc: "Внешние отделочные работы любой сложности. Штукатурка, покраска, облицовка и сопутствующие работы по фасаду.",
    stages: ["Подготовка поверхностей", "Грунтование и армирование", "Штукатурные работы", "Финишная отделка", "Покраска и декор", "Уборка"],
    img: IMG.finishing,
    price: "от 1 800 ₽/м²",
  },
  {
    id: "facade",
    icon: "Building2",
    title: "Фасадные работы",
    desc: "Вентилируемые фасады, штукатурные системы, облицовка камнем, клинкерным кирпичом и панелями. Все материалы и решения.",
    stages: ["Замеры и проект", "Утепление фасада", "Монтаж каркаса (для вентфасада)", "Облицовка", "Установка отливов и откосов", "Проверка качества"],
    img: IMG.facade,
    price: "от 2 400 ₽/м²",
  },
  {
    id: "fence",
    icon: "Fence",
    title: "Заборы и ограждения",
    desc: "Заборы из профнастила, металлоштакетника, кирпича, бетона. Кованые ограды, ворота, калитки с автоматикой.",
    stages: ["Замеры участка", "Подбор материалов", "Установка опор / фундамента", "Монтаж пролётов", "Установка ворот и калитки", "Финальная проверка"],
    img: IMG.fence,
    price: "от 1 600 ₽/п.м.",
  },
  {
    id: "paving",
    icon: "Grid3x3",
    title: "Уличные плиточные работы",
    desc: "Укладка тротуарной плитки, брусчатки, керамогранита. Дорожки, площадки, парковочные места, отмостка вокруг дома.",
    stages: ["Подготовка основания", "Установка бордюров", "Песчано-цементная подушка", "Укладка плитки", "Затирка швов", "Уплотнение и уборка"],
    img: IMG.paving,
    price: "от 1 100 ₽/м²",
  },
  {
    id: "gazebo",
    icon: "TreePine",
    title: "Беседки и террасы",
    desc: "Строим деревянные беседки, террасы, перголы, навесы. От лёгких летних до утеплённых всесезонных конструкций.",
    stages: ["Эскиз и подбор материалов", "Подготовка площадки", "Фундамент / опоры", "Возведение каркаса", "Кровля и обшивка", "Покраска и декор"],
    img: IMG.gazebo,
    price: "от 120 000 ₽",
  },
  {
    id: "banya",
    icon: "Flame",
    title: "Бани",
    desc: "Бани под ключ из бруса, оцилиндрованного бревна, каркасные. С полной комплектацией — парная, печь, полок, отделка.",
    stages: ["Выбор проекта", "Фундамент", "Возведение сруба / каркаса", "Кровля и утепление", "Внутренняя отделка", "Установка печи и комплектация"],
    img: IMG.banya,
    price: "от 480 000 ₽",
  },
];

export default function Services() {
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Page header */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={IMG.hero} alt="Услуги" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,75%)] mb-2">СтройДом</p>
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
                  <Icon name={s.icon} size={18} className="text-[hsl(28,42%,32%)]" fallback="Home" />
                </div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <h2 className="font-display text-3xl lg:text-4xl font-light text-[hsl(25,40%,22%)]">{s.title}</h2>
                  <span className="font-body text-sm font-semibold text-[hsl(28,42%,28%)] bg-[hsl(38,30%,88%)] px-3 py-1">{s.price}</span>
                </div>
                <p className="font-body text-base text-[hsl(30,15%,30%)] leading-relaxed mb-8">{s.desc}</p>
                <div className="space-y-2.5 mb-8">
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-[hsl(28,42%,32%)] mb-4 font-semibold">Этапы работ</p>
                  {s.stages.map((stage, j) => (
                    <div key={stage} className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-[hsl(28,38%,32%)] text-white flex items-center justify-center font-body text-[10px] shrink-0 font-semibold">{j + 1}</span>
                      <span className="font-body text-sm text-[hsl(25,25%,22%)]">{stage}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contacts"
                  className="inline-flex items-center gap-2 bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm font-medium px-7 py-3.5 hover:bg-[hsl(25,40%,22%)] transition-colors"
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
            <p className="font-body text-sm text-[hsl(30,15%,70%)]">Опишите задачу — подберём оптимальное решение и смету</p>
          </div>
          <div className="reveal bg-[hsl(25,35%,24%)] p-8">
            <ContactForm dark={true} title="" />
          </div>
        </div>
      </section>
    </div>
  );
}
