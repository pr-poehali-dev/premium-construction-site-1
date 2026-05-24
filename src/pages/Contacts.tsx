import Icon from "@/components/ui/icon";
import ContactForm from "@/components/ContactForm";
import { useReveal } from "@/hooks/useReveal";

const INTERIOR_IMG = "https://cdn.poehali.dev/projects/f8f21226-2b03-41f9-b5fb-e9d70673c027/files/f0768fb3-be33-4885-8c10-3c0948ff1aa7.jpg";

export default function Contacts() {
  useReveal();

  return (
    <div className="bg-[hsl(40,30%,97%)] min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-64 lg:h-72 overflow-hidden">
        <img src={INTERIOR_IMG} alt="Контакты" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-12 container max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(38,30%,72%)] mb-2">СтройДом</p>
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white">Контакты</h1>
        </div>
      </div>

      <section className="py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="reveal">
              <div className="bg-white border border-[hsl(35,20%,85%)] p-8 lg:p-10">
                <ContactForm
                  title="Оставьте заявку"
                  subtitle="Свяжемся в течение 30 минут в рабочее время"
                />
              </div>
            </div>

            {/* Contacts info */}
            <div className="reveal reveal-delay-2 mt-10 lg:mt-0 space-y-8">
              <div>
                <p className="font-body text-xs tracking-[0.22em] uppercase text-[hsl(28,30%,55%)] mb-5">Как с нами связаться</p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[hsl(38,30%,88%)] flex items-center justify-center shrink-0">
                      <Icon name="Phone" size={16} className="text-[hsl(28,38%,42%)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[hsl(30,10%,52%)] mb-0.5">Телефон / WhatsApp / MAX</p>
                      <a href="tel:+79051785769" className="font-body text-base font-medium text-[hsl(25,25%,20%)] hover:text-[hsl(28,38%,42%)] transition-colors">
                        +7 (905) 178-57-69
                      </a>
                    </div>
                  </div>
                  <a href="max://call?phone=79051785769" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[hsl(38,30%,88%)] group-hover:bg-[hsl(28,38%,32%)] flex items-center justify-center shrink-0 transition-colors">
                      <Icon name="MessageSquare" size={16} className="text-[hsl(28,38%,42%)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[hsl(30,10%,52%)] mb-0.5">MAX</p>
                      <span className="font-body text-base font-medium text-[hsl(25,25%,20%)] group-hover:text-[hsl(28,38%,42%)] transition-colors">
                        Написать в MAX
                      </span>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[hsl(38,30%,88%)] flex items-center justify-center shrink-0">
                      <Icon name="MapPin" size={16} className="text-[hsl(28,38%,42%)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[hsl(30,10%,52%)] mb-0.5">Район</p>
                      <p className="font-body text-base font-medium text-[hsl(25,25%,20%)]">
                        Москва, Пресненский район
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[hsl(38,30%,88%)] flex items-center justify-center shrink-0">
                      <Icon name="Clock" size={16} className="text-[hsl(28,38%,42%)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[hsl(30,10%,52%)] mb-0.5">График работы</p>
                      <p className="font-body text-base font-semibold text-[hsl(25,25%,20%)]">Круглосуточно</p>
                      <p className="font-body text-xs text-[hsl(30,10%,52%)] mt-0.5">Без выходных, 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messengers */}
              <div className="pt-6 border-t border-[hsl(35,20%,86%)]">
                <p className="font-body text-xs tracking-[0.18em] uppercase text-[hsl(28,30%,55%)] mb-4">Написать напрямую</p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="max://call?phone=79051785769"
                    className="flex items-center gap-2 bg-[hsl(28,38%,32%)] hover:bg-[hsl(25,40%,22%)] text-[hsl(38,40%,97%)] font-body text-sm font-medium px-5 py-3 transition-colors"
                  >
                    <Icon name="MessageSquare" size={15} /> Написать в MAX
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}