'use client';

import { QuickReply, ActionColor } from '@/app/types/chat';
import { Icon, IconName } from '@/app/components/ui/Icons';
import { useModal } from '@/app/context/ModalContext';

const colorVar: Record<ActionColor, string> = {
  blue: 'var(--ir-700)',
  red: 'var(--rd-700)',
  green: 'var(--gn-700)',
};

interface QuickRepliesProps {
  replies: QuickReply[];
  onSelect: (reply: QuickReply) => void;
  disabled?: boolean;
  inline?: boolean;
}

export function QuickReplies({ replies, onSelect, disabled, inline }: QuickRepliesProps) {
  const { isOpen, closeModal } = useModal();

  const handleClick = (reply: QuickReply) => {
    if (isOpen) {
      closeModal();
    }
    onSelect(reply);
  };

  return (
    <div className={`flex flex-row justify-end gap-2 lg:gap-4 ${inline ? 'flex-nowrap' : 'flex-wrap'}`}>
      {replies.map((reply, index) => (
        <button
          key={reply.id}
          onClick={() => handleClick(reply)}
          disabled={disabled}
          className="btn-action msg-radius btn-hover-lift animate-fade-in-up flex items-center gap-2 whitespace-nowrap border-2 bg-[var(--background-subtle)] px-3 py-2 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50 lg:gap-3 lg:px-5 lg:py-3.5 lg:text-base"
          style={{
            '--btn-color': colorVar[reply.color ?? 'blue'],
            animationDelay: `${index * 100}ms`,
          } as React.CSSProperties}
        >
          <span className="hidden sm:inline-flex">
            <Icon name={reply.icon as IconName} size={20} />
          </span>
          <span>{reply.label}</span>
        </button>
      ))}
    </div>
  );
}
