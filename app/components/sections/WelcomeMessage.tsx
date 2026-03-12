'use client';

export function WelcomeMessage() {
  return (
    <div className="animate-slide-in-left flex w-full justify-start">
      <div className="message-bubble rounded-bl-xl rounded-br-xl rounded-tl-sm rounded-tr-xl border-2 border-[var(--v-500)] bg-[var(--background-subtle)] p-4 lg:p-6">
        <p className="text-base leading-relaxed text-[var(--ink)] lg:text-lg lg:leading-relaxed">
          Hi! I&apos;m Tetsu Osnaya, Product Designer.{' '}
          <span className="font-semibold text-[var(--v-500)]">
            What do you want to achieve with your product?
          </span>{' '}
          I design solutions to increase conversion and reduce friction.
        </p>
      </div>
    </div>
  );
}
