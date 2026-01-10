'use client';

export function TetsuHeader() {
  return (
    <div className="flex flex-col items-start gap-2 py-6 sm:flex-row sm:gap-4 lg:gap-6 lg:py-8">
      {/* Japanese Logo */}
      <div
        className="text-4xl font-bold text-[var(--v-500)] lg:text-5xl"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        テツ
      </div>

      {/* Name and Title */}
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold text-[var(--v-500)] sm:text-3xl lg:text-4xl">
          Tetsu Osnaya
        </h1>
        <p className="text-lg text-[var(--ink)] opacity-80 sm:text-xl lg:text-2xl">
          UX/UI Designer
        </p>
      </div>
    </div>
  );
}
