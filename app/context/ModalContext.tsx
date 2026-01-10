'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { PortfolioProject } from '@/app/types/chat';

export interface SourceRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface ModalContextType {
  isOpen: boolean;
  project: PortfolioProject | null;
  sourceRect: SourceRect | null;
  openModal: (project: PortfolioProject, element: HTMLElement) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [sourceRect, setSourceRect] = useState<SourceRect | null>(null);

  const openModal = useCallback((project: PortfolioProject, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    setSourceRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
    setProject(project);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    // Delay clearing data to allow close animation
    setTimeout(() => {
      setProject(null);
      setSourceRect(null);
    }, 600);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, project, sourceRect, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
