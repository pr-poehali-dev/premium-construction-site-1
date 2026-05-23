import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Услуги", href: "/services" },
  { label: "Наши работы", href: "/portfolio" },
  { label: "О нас", href: "/about" },
  { label: "Где мы работаем", href: "/geography" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Контакты", href: "/contacts" },
];

const extraLinks = [
  { label: "Поддержка клиентов", href: "/support" },
  { label: "Сертификаты", href: "/certificates" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(40,35%,97%)] border-b border-[hsl(35,20%,85%)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl font-semibold text-[hsl(25,40%,22%)] tracking-wide">
              СтройДом
            </span>
            <span className="font-body text-[10px] font-normal tracking-[0.2em] uppercase text-[hsl(28,30%,45%)] mt-0.5">
              Москва
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative font-body text-[15px] font-semibold tracking-tight transition-all duration-200 group ${
                    isActive
                      ? "text-[hsl(28,42%,28%)]"
                      : "text-[hsl(25,40%,18%)] hover:text-[hsl(28,42%,28%)]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-1.5 h-[2px] bg-[hsl(28,42%,32%)] transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+79051785769"
              className="font-body text-sm font-medium text-[hsl(25,20%,25%)] hover:text-[hsl(28,38%,32%)] transition-colors flex items-center gap-2"
            >
              <Icon name="Phone" size={14} />
              +7 (905) 178-57-69
            </a>
            <Link
              to="/contacts"
              className="bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm px-5 py-2.5 tracking-wide hover:bg-[hsl(25,40%,22%)] transition-colors duration-200"
            >
              Получить консультацию
            </Link>
          </div>

          {/* Burger — на десктопе показывает extraLinks, на мобиле — все ссылки */}
          <button
            className="p-2 text-[hsl(25,20%,25%)] hover:text-[hsl(28,38%,32%)] transition-colors ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Menu drawer */}
      {menuOpen && (
        <div className="bg-[hsl(40,35%,97%)] border-t border-[hsl(35,20%,85%)] px-6 py-6">
          <nav className="container max-w-7xl mx-auto flex flex-col gap-5">
            {/* На мобильных показываем основные ссылки */}
            <div className="lg:hidden flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-base text-[hsl(25,20%,25%)] hover:text-[hsl(28,38%,32%)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-[hsl(35,20%,85%)] my-2" />
            </div>

            {/* Доп. ссылки — везде */}
            {extraLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-body text-base text-[hsl(25,20%,25%)] hover:text-[hsl(28,38%,32%)] transition-colors flex items-center gap-2"
              >
                <Icon name="ArrowRight" size={14} className="text-[hsl(28,42%,32%)]" />
                {link.label}
              </Link>
            ))}

            <div className="border-t border-[hsl(35,20%,85%)] my-2 lg:hidden" />

            <a
              href="tel:+79051785769"
              className="lg:hidden font-body text-base font-medium text-[hsl(28,38%,32%)] flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              +7 (905) 178-57-69
            </a>
            <Link
              to="/contacts"
              className="lg:hidden bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm px-5 py-3 text-center tracking-wide hover:bg-[hsl(25,40%,22%)] transition-colors"
            >
              Получить консультацию
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}