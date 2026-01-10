'use client';

export function WelcomeMessage() {
  return (
    <div className="animate-slide-in-left flex max-w-[95%] justify-start sm:max-w-[85%] lg:max-w-[80%]">
      <div className="message-bubble rounded-bl-xl rounded-br-xl rounded-tl-sm rounded-tr-xl border-2 border-[var(--v-500)] bg-white p-4 lg:p-6">
        <p className="text-base leading-relaxed text-[var(--ink)] lg:text-lg lg:leading-relaxed">
          ¡Hola! Soy Tetsu Osnaya, Diseñador UX/UI.{' '}
          <span className="font-semibold text-[var(--v-500)]">
            ¿Qué quieres lograr con tu producto?
          </span>{' '}
          Yo diseño la solución para aumentar conversión y reducir fricción.
        </p>
      </div>
    </div>
  );
}
