'use client';

import { QuickReply } from '@/app/types/chat';
import { Icon, IconName } from '@/app/components/ui/Icons';
import { useModal } from '@/app/context/ModalContext';

interface QuickRepliesProps {
  replies: QuickReply[];
  onSelect: (reply: QuickReply) => void;
  disabled?: boolean;
}

export function QuickReplies({ replies, onSelect, disabled }: QuickRepliesProps) {
  const { isOpen, closeModal } = useModal();

  const handleClick = (reply: QuickReply) => {
    if (isOpen) {
      closeModal();
    }
    onSelect(reply);
  };

  return (
    <div className="flex flex-row flex-wrap justify-end gap-3 lg:gap-4">
      {replies.map((reply, index) => (
        <button
          key={reply.id}
          onClick={() => handleClick(reply)}
          disabled={disabled}
          className="btn-hover-lift animate-fade-in-up flex items-center gap-3 border-2 border-[var(--ir-700)] bg-white px-4 py-3 font-semibold text-[var(--ir-700)] transition-all hover:bg-[var(--ir-700)] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 lg:px-5 lg:py-3.5"
          style={{ 
            animationDelay: `${index * 100}ms`,
            borderRadius: '12px 12px 4px 12px'
          }}
        >
          <Icon name={reply.icon as IconName} size={20} />
          <span>{reply.label}</span>
        </button>
      ))}
    </div>
  );
}
