'use client';

import {
  WhatsAppIcon,
  ZoomIcon,
  LinkedInIcon,
  MailIcon,
} from '@/app/components/ui/Icons';

const contactOptions = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    description: 'Respuesta rápida',
    icon: WhatsAppIcon,
    href: 'https://wa.me/525521371219?text=Hola%20Tetsu%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20platicar%20contigo',
    color: 'hover:bg-green-500 hover:border-green-500',
  },
  {
    id: 'zoom',
    label: 'Agendar videollamada',
    description: 'Conversemos en vivo',
    icon: ZoomIcon,
    href: 'https://calendar.app.google/HSDnnCS1vug8wnmd9',
    color: 'hover:bg-blue-500 hover:border-blue-500',
  },
  {
    id: 'linkedin',
    label: 'Red profesional',
    description: 'Conectemos en LinkedIn',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/tetsuos/',
    color: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
  },
  {
    id: 'email',
    label: 'Email',
    description: 'Para propuestas formales',
    icon: MailIcon,
    href: 'mailto:nicolas.osnaya@gmail.com',
    color: 'hover:bg-[var(--v-500)] hover:border-[var(--v-500)]',
  },
];

export function ContactSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="space-y-2 text-base leading-relaxed lg:space-y-3 lg:text-lg lg:leading-relaxed">
        <p>
          <span className="font-bold text-[var(--v-500)]">
            ¡Qué gusto que quieras conversar!
          </span>
        </p>
        <p className="text-[var(--ink)]">
          Estoy aquí para pensar contigo la mejor manera de avanzar tu producto.
          Elige el medio que te resulte más cómodo y damos el primer paso:
        </p>
      </div>

      {/* Contact Options - Stack on mobile, Grid on desktop */}
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4 lg:gap-5">
        {contactOptions.map((option, index) => {
          const IconComponent = option.icon;
          return (
            <a
              key={option.id}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-hover-lift link-hover animate-fade-in-up group flex items-center gap-4 rounded-[12px] border-2 border-[var(--v-500)] bg-white p-4 transition-all lg:p-5 ${option.color} hover:text-white`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[var(--v-50)] transition-colors group-hover:bg-white/20 lg:h-14 lg:w-14">
                <IconComponent size={24} className="text-[var(--v-500)] transition-colors group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[var(--v-500)] transition-colors group-hover:text-white lg:text-lg">
                  {option.label}
                </span>
                <span className="text-sm text-gray-500 transition-colors group-hover:text-white/80 lg:text-base">
                  {option.description}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
