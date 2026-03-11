'use client';

import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from '@/app/context/ThemeContext';

export function TetsuHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between py-6 lg:py-8">
      {/* Logo + Name */}
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4 lg:gap-6">
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

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="btn-hover-lift flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--n-100)] bg-[var(--n-50)] text-[var(--v-500)]"
        aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
      </button>
    </div>
  );
}
