'use client';

import { Message } from '@/app/types/chat';
import { CVSection } from '@/app/components/sections/CVSection';
import { PortfolioSection } from '@/app/components/sections/PortfolioSection';
import { ContactSection } from '@/app/components/sections/ContactSection';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user';
  
  const animationClass = isUser ? 'animate-slide-in-right' : 'animate-slide-in-left';
  
  // User message bubble
  if (isUser) {
    return (
      <div className={`flex justify-end ${animationClass}`}>
        <div className="msg-radius message-bubble max-w-[85%] bg-[var(--ir-700)] px-4 py-3 lg:max-w-[70%] lg:px-5 lg:py-4">
          <p className="font-semibold text-white lg:text-lg">{message.content}</p>
        </div>
      </div>
    );
  }
  
  // Tetsu message bubble - check for special section content
  const renderContent = () => {
    switch (message.content) {
      case 'cv-section':
        return <CVSection />;
      case 'portfolio-section':
        return <PortfolioSection />;
      case 'contact-section':
        return <ContactSection />;
      default:
        return <p className="text-[var(--ink)] lg:text-lg">{message.content}</p>;
    }
  };
  
  return (
    <div className={`flex justify-start ${animationClass}`}>
      <div className="msg-radius-alt message-bubble w-full border-2 border-[var(--v-500)] bg-[var(--background-subtle)] p-4 lg:p-6">
        {renderContent()}
      </div>
    </div>
  );
}
