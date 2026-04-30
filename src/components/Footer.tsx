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
                Краснодар
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-[hsl(30,15%,65%)] max-w-xs">
              12 лет строим дома, которым доверяют. Более 200 реализованных объектов в Краснодаре и Краснодарском крае.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/78612345678"
                className="w-9 h-9 bg-[hsl(25,30%,28%)] flex items-center justify-center hover:bg-[hsl(28,38%,42%)] transition-colors"
                aria-label="WhatsApp"
              >
                <Icon name="MessageCircle" size={16} className="text-[hsl(38,40%,90%)]" />
              </a>
              <a
                href="https://t.me/stroydom_krd"
                className="w-9 h-9 bg-[hsl(25,30%,28%)] flex items-center justify-center hover:bg-[hsl(28,38%,42%)] transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={16} className="text-[hsl(38,40%,90%)]" />
              </a>
              <a
                href="https://vk.com/stroydom_krd"
                className="w-9 h-9 bg-[hsl(25,30%,28%)] flex items-center justify-center hover:bg-[hsl(28,38%,42%)] transition-colors"
                aria-label="VKontakte"
              >
                <Icon name="Users" size={16} className="text-[hsl(38,40%,90%)]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs tracking-[0.18em] uppercase text-[hsl(28,25%,65%)] mb-5">Услуги</h4>
            <ul className="space-y-3">
              {[
                { label: "Строительство домов", href: "/services/houses" },
                { label: "Кровельные работы", href: "/services/roofing" },
                { label: "Фундамент", href: "/services/foundation" },
                { label: "Отделка", href: "/services/finishing" },
                { label: "Ремонт под ключ", href: "/services/renovation" },
                { label: "Коммерческое строительство", href: "/services/commercial" },
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
                  <a href="tel:+78612345678" className="font-body text-sm text-[hsl(38,30%,85%)] hover:text-white transition-colors block">
                    +7 (861) 234-56-78
                  </a>
                  <span className="font-body text-xs text-[hsl(30,10%,55%)]">Звонки и WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Mail" size={15} className="text-[hsl(28,30%,55%)] mt-0.5 shrink-0" />
                <a href="mailto:info@stroydom-krd.ru" className="font-body text-sm text-[hsl(38,30%,85%)] hover:text-white transition-colors">
                  info@stroydom-krd.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={15} className="text-[hsl(28,30%,55%)] mt-0.5 shrink-0" />
                <span className="font-body text-sm text-[hsl(30,15%,65%)]">
                  г. Краснодар, ул. Красная, 135
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Clock" size={15} className="text-[hsl(28,30%,55%)] mt-0.5 shrink-0" />
                <div>
                  <span className="font-body text-sm text-[hsl(30,15%,65%)] block">Пн–Пт: 9:00 – 19:00</span>
                  <span className="font-body text-sm text-[hsl(30,15%,65%)] block">Сб: 10:00 – 16:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 rounded-sm overflow-hidden h-48 bg-[hsl(25,25%,24%)] flex items-center justify-center border border-[hsl(25,20%,28%)]">
          <div className="text-center">
            <Icon name="MapPin" size={24} className="text-[hsl(28,30%,55%)] mx-auto mb-2" />
            <p className="font-body text-sm text-[hsl(30,15%,55%)]">г. Краснодар, ул. Красная, 135</p>
            <a
              href="https://yandex.ru/maps/?text=Краснодар+ул+Красная+135"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-[hsl(28,30%,55%)] hover:text-[hsl(38,30%,75%)] transition-colors mt-1 block underline underline-offset-2"
            >
              Открыть на Яндекс.Картах →
            </a>
          </div>
        </div>

        <div className="border-t border-[hsl(25,20%,25%)] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[hsl(30,10%,50%)]">
            © 2024 СтройДом. Все права защищены.
          </p>
          <p className="font-body text-xs text-[hsl(30,10%,50%)]">
            Строительство домов в Краснодаре и Краснодарском крае
          </p>
        </div>
      </div>
    </footer>
  );
}
