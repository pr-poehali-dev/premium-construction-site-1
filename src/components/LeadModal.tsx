import { useEffect } from "react";
import Icon from "@/components/ui/icon";
import ContactForm from "@/components/ContactForm";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
  title?: string;
  subtitle?: string;
}

export default function LeadModal({
  open,
  onClose,
  defaultService = "",
  title = "Оставьте заявку",
  subtitle = "Перезвоним в течение 30 минут",
}: LeadModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[hsl(40,30%,97%)] max-w-md w-full max-h-[90vh] overflow-y-auto relative animate-scale-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-[hsl(25,25%,25%)] hover:bg-[hsl(38,30%,88%)] transition-colors z-10"
          aria-label="Закрыть"
        >
          <Icon name="X" size={20} />
        </button>
        <div className="p-8 lg:p-10">
          <ContactForm
            title={title}
            subtitle={subtitle}
            defaultService={defaultService}
          />
        </div>
      </div>
    </div>
  );
}
