import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-[hsl(25,40%,18%)] text-[hsl(38,25%,85%)]">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-5">
              <span className="font-display text-2xl font-semibold text-[hsl(38,40%,95%)] tracking-wide">
                СтройДом
              </span>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[hsl(28,25%,65%)] mt-1">
                Москва
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-[hsl(30,15%,65%)] max-w-xs">
              12 лет работаем в строительстве. Более 700 реализованных объектов в Москве и Московской области.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="max://call?phone=79051785769"
                className="inline-flex items-center gap-2 bg-[hsl(28,38%,32%)] hover:bg-[hsl(28,42%,40%)] text-[hsl(38,40%,95%)] font-body text-sm font-medium px-4 h-9 transition-colors"
                aria-label="MAX"
              >
                <Icon name="MessageSquare" size={14} /> MAX
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs tracking-[0.18em] uppercase text-[hsl(28,25%,65%)] mb-5">Услуги</h4>
            <ul className="space-y-3">
              {[
                { label: "Кровельные работы", href: "/services/roofing" },
                { label: "Фундамент", href: "/services/foundation" },
                { label: "Отделочные работы", href: "/services/finishing" },
                { label: "Фасадные работы", href: "/services/facade" },
                { label: "Заборы и ограждения", href: "/services/fence" },
                { label: "Плиточные работы", href: "/services/paving" },
                { label: "Пристройки, беседки и террасы", href: "/services/gazebo" },
                { label: "Бани", href: "/services/banya" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="font-body text-sm text-[hsl(30,15%,65%)] hover:text-[hsl(38,30%,85%)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs tracking-[0.18em] uppercase text-[hsl(28,25%,65%)] mb-5">Компания</h4>
            <ul className="space-y-3">
              {[
                { label: "О нас", href: "/about" },
                { label: "Наши работы", href: "/portfolio" },
                { label: "Почему мы", href: "/why-us" },
                { label: "Отзывы", href: "/reviews" },
                { label: "Сертификаты", href: "/certificates" },
                { label: "Поддержка клиентов", href: "/support" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="font-body text-sm text-[hsl(30,15%,65%)] hover:text-[hsl(38,30%,85%)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-body text-xs tracking-[0.18em] uppercase text-[hsl(28,25%,65%)] mb-5">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="Phone" size={15} className="text-[hsl(28,30%,55%)] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+79051785769" className="font-body text-sm text-[hsl(38,30%,85%)] hover:text-white transition-colors block">
                    +7 (905) 178-57-69
                  </a>
                  <span className="font-body text-xs text-[hsl(30,10%,55%)]">Звонки, WhatsApp, MAX</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={15} className="text-[hsl(28,30%,55%)] mt-0.5 shrink-0" />
                <span className="font-body text-sm text-[hsl(30,15%,65%)]">
                  Москва, Пресненский район
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Clock" size={15} className="text-[hsl(28,30%,55%)] mt-0.5 shrink-0" />
                <div>
                  <span className="font-body text-sm text-[hsl(30,15%,65%)] block">Работаем круглосуточно</span>
                  <span className="font-body text-xs text-[hsl(30,10%,55%)] block mt-0.5">Без выходных, 24/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>



        <div className="border-t border-[hsl(25,20%,25%)] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[hsl(30,10%,50%)]">
            © 2024 СтройДом. Все права защищены.
          </p>
          <p className="font-body text-xs text-[hsl(30,10%,50%)]">
            Строительные работы в Москве и Московской области
          </p>
        </div>
      </div>
    </footer>
  );
}