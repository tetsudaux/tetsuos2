'use client';

import { TagType } from '@/app/types/chat';
import { Icon, IconName } from './Icons';

interface TagProps {
  type: TagType;
  label: string;
  size?: 'sm' | 'md';
}

const tagConfig: Record<TagType, { icon: IconName; colorClass: string }> = {
  video: { icon: 'video', colorClass: 'text-[var(--mg-700)]' },
  diseño: { icon: 'diseño', colorClass: 'text-[var(--mg-700)]' },
  'social-media': { icon: 'social-media', colorClass: 'text-[var(--mg-700)]' },
  código: { icon: 'código', colorClass: 'text-[var(--mg-700)]' },
  marketing: { icon: 'marketing', colorClass: 'text-[var(--mg-700)]' },
  ai: { icon: 'ai', colorClass: 'text-[var(--v-800)]' },
  producto: { icon: 'producto', colorClass: 'text-[var(--v-800)]' },
};

export function Tag({ type, label, size = 'md' }: TagProps) {
  const config = tagConfig[type];
  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-xs gap-1' : 'px-3 py-2 text-sm gap-2';
  const iconSize = size === 'sm' ? 14 : 18;

  return (
    <div
      className={`inline-flex items-center rounded-xl bg-[var(--n-50)] font-semibold ${config.colorClass} ${sizeClasses}`}
    >
      <Icon name={config.icon} size={iconSize} />
      <span>{label}</span>
    </div>
  );
}
