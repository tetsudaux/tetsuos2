'use client';

import { useEffect, useState, useRef } from 'react';
import { useModal, SourceRect } from '@/app/context/ModalContext';
import { IconArrowLeft } from '@tabler/icons-react';
import { CaseStudyContent } from './CaseStudyContent';

export function SharedElementModal() {
  const { isOpen, project, sourceRect, closeModal } = useModal();
  const [animationPhase, setAnimationPhase] = useState<'closed' | 'expanding' | 'settling' | 'open' | 'closing'>('closed');
  const [ghostStyle, setGhostStyle] = useState<React.CSSProperties>({});
  const [heroHeight, setHeroHeight] = useState<string>('100%');
  const overlayRef = useRef<HTMLDivElement>(null);

  // Calculate final modal position (fullscreen on mobile, centered with space for footer on desktop)
  const getTargetRect = (): SourceRect => {
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    const isMobile = viewportWidth < 768;

    if (isMobile) {
      return {
        left: 0,
        top: 0,
        width: viewportWidth,
        height: viewportHeight,
      };
    }

    const topMargin = 16;
    const footerBottomOffset = 16; // footer's bottom-4 = 16px
    const footerHeight = 84; // footer with padding (py-6 + content)
    const gapBetween = 32; // 32px gap between modal and footer
    const footerTop = viewportHeight - footerBottomOffset - footerHeight;
    const modalWidth = Math.min(viewportWidth * 0.9, 1024);
    const modalHeight = footerTop - gapBetween - topMargin;

    return {
      left: (viewportWidth - modalWidth) / 2,
      top: topMargin,
      width: modalWidth,
      height: modalHeight,
    };
  };

  // Handle opening animation
  useEffect(() => {
    if (isOpen && sourceRect && animationPhase === 'closed') {
      // Start with source position and opacity 0
      setHeroHeight('100%');
      setGhostStyle({
        position: 'fixed',
        top: sourceRect.top,
        left: sourceRect.left,
        width: sourceRect.width,
        height: sourceRect.height,
        borderRadius: '12px',
        zIndex: 60,
        overflow: 'hidden',
        opacity: 0.8,
        transform: 'scale(1)',
      });

      setAnimationPhase('expanding');
    }
  }, [isOpen, sourceRect, animationPhase]);

  // Separate effect for the actual expansion animation
  useEffect(() => {
    if (animationPhase === 'expanding' && sourceRect) {
      // Double requestAnimationFrame to ensure the initial state is painted
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = getTargetRect();
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          setGhostStyle({
            position: 'fixed',
            top: target.top,
            left: target.left,
            width: target.width,
            height: target.height,
            borderRadius: isMobile ? '0px' : '12px',
            zIndex: 60,
            overflow: 'hidden',
            opacity: 1,
            transform: 'scale(1)',
            transition: 'top 900ms cubic-bezier(0.4, 0, 0.2, 1), left 900ms cubic-bezier(0.4, 0, 0.2, 1), width 900ms cubic-bezier(0.4, 0, 0.2, 1), height 900ms cubic-bezier(0.4, 0, 0.2, 1), border-radius 900ms cubic-bezier(0.4, 0, 0.2, 1), opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          });
        });
      });

      // Move to settling phase after container expansion
      const timer = setTimeout(() => {
        setAnimationPhase('settling');
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [animationPhase, sourceRect]);

  // Handle settling phase - transition hero height
  useEffect(() => {
    if (animationPhase === 'settling') {
      // Transition hero to final height
      requestAnimationFrame(() => {
        setHeroHeight('280px');
      });

      // Mark as open after hero settles
      const timer = setTimeout(() => {
        setAnimationPhase('open');
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  // Handle closing animation
  const handleClose = () => {
    if (animationPhase !== 'open') return;

    setAnimationPhase('closing');

    // First, expand hero back to 100%
    setHeroHeight('100%');

    // Then animate back to source position with fade out
    setTimeout(() => {
      if (sourceRect) {
        setGhostStyle({
          position: 'fixed',
          top: sourceRect.top,
          left: sourceRect.left,
          width: sourceRect.width,
          height: sourceRect.height,
          borderRadius: '12px',
          zIndex: 60,
          overflow: 'hidden',
          opacity: 0,
          transform: 'scale(0.98)',
          transition: 'top 800ms cubic-bezier(0.4, 0, 0.2, 1), left 800ms cubic-bezier(0.4, 0, 0.2, 1), width 800ms cubic-bezier(0.4, 0, 0.2, 1), height 800ms cubic-bezier(0.4, 0, 0.2, 1), border-radius 800ms cubic-bezier(0.4, 0, 0.2, 1), opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)',
        });
      }
    }, 300);

    setTimeout(() => {
      setAnimationPhase('closed');
      closeModal();
    }, 1100);
  };

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && animationPhase === 'open') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [animationPhase]);

  // Reset when closed
  useEffect(() => {
    if (!isOpen && animationPhase !== 'closed') {
      setAnimationPhase('closed');
    }
  }, [isOpen]);

  if (!project || animationPhase === 'closed') return null;

  const bgColor = project.category === 'product' 
    ? 'var(--v-800)' 
    : 'var(--mg-700)';

  const borderColor = project.category === 'product'
    ? 'var(--v-500)'
    : 'var(--mg-700)';

  // Fluent Design System 2 shadows - colored based on border
  const shadowColor = project.category === 'product'
    ? 'rgba(133, 88, 204, 0.35)'   // --v-500 (#8558cc)
    : 'rgba(153, 51, 123, 0.35)';  // --mg-700 (#99337b)
  const shadowColorAmbient = project.category === 'product'
    ? 'rgba(133, 88, 204, 0.15)'
    : 'rgba(153, 51, 123, 0.15)';
  const fluentShadow64 = `0 0 2px ${shadowColorAmbient}, 0 32px 64px ${shadowColor}`;

  const scrollbarColor = project.category === 'product'
    ? 'var(--v-500)'
    : 'var(--mg-700)';

  const isContentVisible = animationPhase === 'settling' || animationPhase === 'open' || animationPhase === 'closing';

  return (
    <>
      {/* Click outside to close */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="fixed inset-0 z-50"
      />

      {/* Ghost Element / Modal */}
      <div
        style={{
          ...ghostStyle,
          backgroundColor: bgColor,
          border: `2px solid ${borderColor}`,
          boxShadow: fluentShadow64,
        }}
      >
        {/* Back Button - Mobile: above footer, Desktop: bottom right of modal */}
        <button
          onClick={handleClose}
          className={`btn-hover-lift fixed bottom-24 right-4 z-[110] flex items-center gap-3 border-2 border-[var(--ir-700)] bg-white px-4 py-3 font-semibold text-[var(--ir-700)] shadow-[0_4px_12px_rgba(49,91,207,0.15),0_8px_24px_rgba(49,91,207,0.1)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--ir-700)] hover:text-white lg:absolute lg:bottom-6 lg:right-6 lg:z-20 lg:px-5 lg:py-3.5 ${
            animationPhase === 'closing' ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
          }`}
          style={{
            borderRadius: '12px 12px 4px 12px',
            animationName: isContentVisible && animationPhase !== 'closing' ? 'fadeInUp' : 'none',
            animationDuration: '500ms',
            animationTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
            animationFillMode: 'forwards',
            animationDelay: '400ms',
          }}
          aria-label="Regresar"
        >
          <IconArrowLeft size={20} />
          <span>Regresar</span>
        </button>

        {/* Scrollable Content - Hero + Case Study */}
        <div
          className="modal-scroll h-full overflow-y-auto"
        >
          {/* Hero Section */}
          <div
            className="relative w-full"
            style={{
              height: heroHeight,
              minHeight: heroHeight,
              transition: 'height 500ms cubic-bezier(0.32, 0.72, 0, 1), min-height 500ms cubic-bezier(0.32, 0.72, 0, 1)',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Title overlay - fade in after expansion, fade out on close */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{
                opacity: isContentVisible && animationPhase !== 'closing' ? 1 : 0,
                transform: isContentVisible && animationPhase !== 'closing' ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 400ms cubic-bezier(0.32, 0.72, 0, 1), transform 400ms cubic-bezier(0.32, 0.72, 0, 1)',
                transitionDelay: animationPhase === 'settling' ? '100ms' : '0ms',
              }}
            >
              <h1 className="text-2xl font-bold text-white lg:text-3xl">
                {project.title}
              </h1>
              <p className="mt-1 text-lg text-white/80">
                {project.company}
              </p>
            </div>
          </div>

          {/* Content - Fades in after expansion */}
          <div
            className={`bg-white transition-opacity duration-300 ${
              isContentVisible && animationPhase !== 'closing' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {isContentVisible && <CaseStudyContent project={project} />}
          </div>
        </div>
      </div>
    </>
  );
}
