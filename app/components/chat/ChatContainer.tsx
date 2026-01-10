'use client';

import { useChat } from '@/app/hooks/useChat';
import { useModal } from '@/app/context/ModalContext';
import { TetsuHeader } from '@/app/components/ui/TetsuHeader';
import { MessageBubble } from './MessageBubble';
import { QuickReplies } from './QuickReplies';
import { TypingIndicator } from './TypingIndicator';
import { WelcomeMessage } from '@/app/components/sections/WelcomeMessage';

export function ChatContainer() {
  const {
    messages,
    isTyping,
    availableReplies,
    handleQuickReply,
    messagesEndRef,
    scrollContainerRef,
  } = useChat();
  const { isOpen: isModalOpen } = useModal();

  const isInitial = messages.length === 0;

  return (
    <div className="desktop-bg flex min-h-screen flex-col lg:items-center lg:justify-center lg:p-8">
      {/* Main Chat Area - Centered like ChatGPT */}
      <div className={`chat-container-animate mx-auto flex h-screen w-full max-w-3xl flex-col lg:h-[calc(100vh-64px)] lg:max-h-[900px] ${isInitial ? 'chat-initial' : 'chat-active'}`}>
        {/* Scrollable Content Area (Header + Messages) */}
        <main 
          ref={scrollContainerRef}
          className={`chat-scroll flex-1 overflow-y-auto flex flex-col ${isInitial ? 'justify-center' : 'justify-start'}`}
        >
          {/* Content wrapper - animated position */}
          <div className={`content-wrapper-animate ${isInitial ? 'content-centered' : 'content-top'}`}>
            {/* Header - Now scrolls with content */}
            <header className="header-animate px-4 lg:px-8" style={{ borderBottomColor: isInitial ? 'transparent' : 'var(--n-100)', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}>
              <TetsuHeader />
            </header>

            {/* Messages */}
            <div className="messages-container-animate flex flex-col gap-4 px-4 pb-28 pt-6 lg:gap-6 lg:px-8 lg:pb-8 lg:pt-8">
              {/* Welcome Message - Always shown first */}
              <div className={`welcome-animate ${isInitial ? 'welcome-initial' : 'welcome-active'}`}>
                <WelcomeMessage />
              </div>

              {/* Quick Replies - Inside chat area only at start */}
              {isInitial && (
                <div className="quick-replies-animate mt-2">
                  <QuickReplies
                    replies={availableReplies}
                    onSelect={handleQuickReply}
                    disabled={isTyping}
                  />
                </div>
              )}

              {/* Dynamic Messages */}
              {messages.map((message, index) => (
                <div 
                  key={message.id} 
                  className="message-animate"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <MessageBubble message={message} />
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && <TypingIndicator />}

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </main>

        {/* Quick Replies - Fixed on mobile, conditional on desktop */}
        {!isInitial && (
          <>
            {/* Desktop: Static footer when no modal */}
            <footer
              className={`hidden lg:block shrink-0 rounded-b-2xl border-t border-[var(--n-100)] bg-white px-8 py-6 transition-opacity duration-300 ${
                isModalOpen ? 'lg:opacity-0 lg:pointer-events-none' : 'lg:opacity-100'
              }`}
            >
              <QuickReplies
                replies={availableReplies}
                onSelect={handleQuickReply}
                disabled={isTyping}
              />
            </footer>

            {/* Mobile: Fixed footer always | Desktop: Fixed footer only when modal open */}
            <footer
              className={`fixed bottom-0 left-0 right-0 z-[100] rounded-t-[20px] bg-white px-4 py-4 shadow-[0_0_2px_rgba(49,91,207,0.15),0_-8px_16px_rgba(49,91,207,0.25)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
                isModalOpen
                  ? 'lg:!block lg:bottom-4 lg:left-1/2 lg:right-auto lg:z-[70] lg:w-[min(90vw,1024px)] lg:-translate-x-1/2 lg:rounded-[20px] lg:px-8 lg:py-6 lg:opacity-100 lg:shadow-[0_0_2px_rgba(49,91,207,0.15),0_14px_28px_rgba(49,91,207,0.35)]'
                  : ''
              }`}
            >
              <QuickReplies
                replies={availableReplies}
                onSelect={handleQuickReply}
                disabled={isTyping}
              />
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
