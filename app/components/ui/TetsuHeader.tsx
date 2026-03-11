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
        <div className="font-jp text-4xl font-bold text-[var(--v-500)] lg:text-5xl">
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
        role="switch"
        aria-checked={theme === 'dark'}
        aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        className="theme-toggle-track relative flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border border-[var(--n-100)] transition-colors duration-300"
      >
        {/* Sun icon - left */}
        <span className={`absolute left-1.5 text-[var(--v-500)] transition-opacity duration-200 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}>
          <IconSun size={14} />
        </span>
        {/* Moon icon - right */}
        <span className={`absolute right-1.5 text-[var(--v-300)] transition-opacity duration-200 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
          <IconMoon size={14} />
        </span>
        {/* Thumb */}
        <span className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-[var(--v-500)] shadow-sm transition-transform duration-300 ${theme === 'dark' ? 'translate-x-[34px]' : 'translate-x-[2px]'}`} />
      </button>
    </div>
  );
}
