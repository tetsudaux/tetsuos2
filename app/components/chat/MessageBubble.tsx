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
        <div 
          className="message-bubble max-w-[85%] bg-[var(--ir-700)] px-4 py-3 lg:max-w-[70%] lg:px-5 lg:py-4"
          style={{ borderRadius: '12px 12px 4px 12px' }}
        >
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
      <div 
        className="message-bubble max-w-[95%] border-2 border-[var(--v-500)] bg-white p-4 sm:max-w-[85%] lg:max-w-[80%] lg:p-6"
        style={{ borderRadius: '4px 12px 12px 12px' }}
      >
        {renderContent()}
      </div>
    </div>
  );
}
