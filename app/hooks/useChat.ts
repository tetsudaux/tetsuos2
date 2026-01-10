'use client';

import { useReducer, useCallback, useRef, useEffect } from 'react';
import { ChatState, ChatAction, Message, Section, QuickReply } from '@/app/types/chat';
import { getRepliesForSection, initialReplies } from '@/app/data/portfolio';

const generateId = () => Math.random().toString(36).substring(2, 9);

const initialState: ChatState = {
  messages: [],
  isTyping: false,
  currentSection: 'welcome',
  availableReplies: initialReplies,
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'ADD_USER_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: generateId(),
            sender: 'user',
            content: action.payload.content,
            section: action.payload.section,
            timestamp: Date.now(),
          },
        ],
      };
    case 'ADD_TETSU_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: generateId(),
            sender: 'tetsu',
            content: action.payload.content,
            section: action.payload.section,
            timestamp: Date.now(),
          },
        ],
        currentSection: action.payload.section,
      };
    case 'SET_TYPING':
      return {
        ...state,
        isTyping: action.payload,
      };
    case 'SET_SECTION':
      return {
        ...state,
        currentSection: action.payload,
      };
    case 'SET_REPLIES':
      return {
        ...state,
        availableReplies: action.payload,
      };
    case 'RESET_CHAT':
      return initialState;
    default:
      return state;
  }
}

const sectionMessages: Record<Section, { user: string; tetsu: string }> = {
  welcome: {
    user: '',
    tetsu: '',
  },
  cv: {
    user: 'Ver tu CV',
    tetsu: 'cv-section',
  },
  portfolio: {
    user: 'Ver tu trabajo',
    tetsu: 'portfolio-section',
  },
  contact: {
    user: 'Hablemos',
    tetsu: 'contact-section',
  },
};

export function useChat() {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToTop = useCallback(() => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages, scrollToBottom]);

  const handleQuickReply = useCallback(async (reply: QuickReply) => {
    const section = reply.section;
    
    // If going back to welcome, reset the entire chat
    if (section === 'welcome') {
      dispatch({ type: 'RESET_CHAT' });
      scrollToTop();
      return;
    }
    
    const messages = sectionMessages[section];

    // Add user message
    if (messages.user) {
      dispatch({
        type: 'ADD_USER_MESSAGE',
        payload: { content: messages.user, section },
      });
    }

    // Show typing indicator
    dispatch({ type: 'SET_TYPING', payload: true });

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 400));

    // Hide typing and add Tetsu's response
    dispatch({ type: 'SET_TYPING', payload: false });

    if (messages.tetsu) {
      dispatch({
        type: 'ADD_TETSU_MESSAGE',
        payload: { content: messages.tetsu, section },
      });
    }

    // Update available replies
    dispatch({ type: 'SET_REPLIES', payload: getRepliesForSection(section) });
  }, [scrollToTop]);

  const resetChat = useCallback(() => {
    dispatch({ type: 'RESET_CHAT' });
    scrollToTop();
  }, [scrollToTop]);

  return {
    messages: state.messages,
    isTyping: state.isTyping,
    currentSection: state.currentSection,
    availableReplies: state.availableReplies,
    handleQuickReply,
    resetChat,
    messagesEndRef,
    scrollContainerRef,
  };
}
