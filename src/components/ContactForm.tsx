import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
  defaultService?: string;
}

const LEAD_URL = "https://functions.poehali.dev/a93944ec-f93f-4ff0-b914-2e09a04a9c2c";

export default function ContactForm({
  title = "Рассчитать стоимость",
  subtitle = "Оставьте заявку — свяжемся в течение 30 минут",
  dark = false,
  defaultService = "",
}: ContactFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", service: defaultService, comment: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch(LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSent(true);
      } else {
        setError(data.error || "Не удалось отправить. Попробуйте позже или позвоните.");
      }
    } catch {
      setError("Не удалось отправить. Попробуйте позже или позвоните.");
    } finally {
      setLoading(false);
    }
  };

  const textColor = dark ? "text-[hsl(38,30%,85%)]" : "text-[hsl(25,20%,20%)]";
  const subColor = dark ? "text-[hsl(30,15%,60%)]" : "text-[hsl(30,10%,45%)]";
  const inputBg = dark
    ? "bg-[hsl(25,30%,22%)] border-[hsl(25,20%,30%)] text-[hsl(38,30%,88%)] placeholder-[hsl(30,12%,45%)]"
    : "bg-white border-[hsl(35,20%,82%)] text-[hsl(25,20%,20%)] placeholder-[hsl(30,10%,60%)]";

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className={`w-14 h-14 rounded-full ${dark ? "bg-[hsl(25,30%,28%)]" : "bg-[hsl(38,35%,90%)]"} flex items-center justify-center mb-5`}>
          <Icon name="Check" size={24} className="text-[hsl(28,38%,42%)]" />
        </div>
        <h3 className={`font-display text-2xl font-medium ${textColor} mb-2`}>Спасибо! Заявка принята</h3>
        <p className={`font-body text-sm ${subColor} max-w-xs`}>Мы свяжемся с вами в ближайшее время</p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <div className="mb-7">
          <h3 className={`font-display text-3xl lg:text-4xl font-medium ${textColor} mb-2`}>{title}</h3>
          <p className={`font-body text-sm ${subColor}`}>{subtitle}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className={`w-full px-4 py-3.5 font-body text-sm border outline-none focus:border-[hsl(28,38%,42%)] transition-colors ${inputBg}`}
          />
          <input
            type="tel"
            placeholder="Телефон"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            className={`w-full px-4 py-3.5 font-body text-sm border outline-none focus:border-[hsl(28,38%,42%)] transition-colors ${inputBg}`}
          />
        </div>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={`w-full px-4 py-3.5 font-body text-sm border outline-none focus:border-[hsl(28,38%,42%)] transition-colors appearance-none ${inputBg}`}
        >
          <option value="">Выберите услугу</option>
          <option value="roofing">Кровельные работы</option>
          <option value="foundation">Фундаментные работы</option>
          <option value="finishing">Отделочные работы</option>
          <option value="facade">Фасадные работы</option>
          <option value="fence">Заборы и ограждения</option>
          <option value="paving">Плиточные работы</option>
          <option value="gazebo">Пристройки, беседки и террасы</option>
          <option value="banya">Бани</option>
        </select>
        <textarea
          placeholder="Кратко опишите задачу (необязательно)"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          rows={3}
          className={`w-full px-4 py-3.5 font-body text-sm border outline-none focus:border-[hsl(28,38%,42%)] transition-colors resize-none ${inputBg}`}
        />
        {error && (
          <p className="font-body text-xs text-red-500 text-center">{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[hsl(28,38%,32%)] text-[hsl(40,35%,97%)] font-body text-sm font-medium py-4 tracking-wide hover:bg-[hsl(25,40%,22%)] transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Отправляем..." : "Отправить заявку"}
          {!loading && <Icon name="ArrowRight" size={16} />}
        </button>
        <p className={`font-body text-xs ${subColor} text-center`}>
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </div>
  );
}