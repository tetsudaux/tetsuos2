'use client';

export function TypingIndicator() {
  return (
    <div className="animate-slide-in-left flex max-w-[85%] items-start gap-3">
      <div className="flex items-center gap-1 rounded-bl-xl rounded-br-xl rounded-tl-sm rounded-tr-xl border-2 border-[var(--v-500)] bg-white px-4 py-3">
        <span className="typing-dot h-2 w-2 rounded-full bg-[var(--v-500)]" />
        <span className="typing-dot h-2 w-2 rounded-full bg-[var(--v-500)]" />
        <span className="typing-dot h-2 w-2 rounded-full bg-[var(--v-500)]" />
      </div>
    </div>
  );
}
