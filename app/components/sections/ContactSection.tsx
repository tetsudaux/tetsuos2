'use client';

import {
  WhatsAppIcon,
  ZoomIcon,
  LinkedInIcon,
  MailIcon,
} from '@/app/components/ui/Icons';

const STAGGER_DELAY_MS = 100;

const contactOptions = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    description: 'Quick response',
    icon: WhatsAppIcon,
    href: 'https://wa.me/525521371219?text=Hi%20Tetsu%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20chat',
    color: 'hover:bg-green-500 hover:border-green-500',
  },
  {
    id: 'zoom',
    label: 'Schedule a call',
    description: 'Let\u2019s talk live',
    icon: ZoomIcon,
    href: 'https://calendar.app.google/HSDnnCS1vug8wnmd9',
    color: 'hover:bg-blue-500 hover:border-blue-500',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'Let\u2019s connect',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/tetsuos/',
    color: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
  },
  {
    id: 'email',
    label: 'Email',
    description: 'For formal proposals',
    icon: MailIcon,
    href: 'mailto:nicolas.osnaya@gmail.com',
    color: 'hover:bg-[var(--v-500)] hover:border-[var(--v-500)]',
  },
];

export function ContactSection() {
  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      <div className="space-y-2 text-base leading-relaxed lg:space-y-3 lg:text-lg lg:leading-relaxed">
        <p>
          <span className="font-bold text-[var(--v-500)]">
            Great that you want to connect!
          </span>
        </p>
        <p className="text-[var(--ink)]">
          I&apos;m here to help you figure out the best way to move your product
          forward. Pick the channel that works best for you:
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
              className={`btn-hover-lift link-hover animate-fade-in-up group flex items-center gap-4 rounded-[12px] border-2 border-[var(--v-500)] bg-[var(--background-subtle)] p-4 transition-all lg:p-5 ${option.color} hover:text-white`}
              style={{ animationDelay: `${index * STAGGER_DELAY_MS}ms` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[var(--n-50)] transition-colors group-hover:bg-[var(--background-subtle)]/20 lg:h-14 lg:w-14">
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
    </section>
  );
}
