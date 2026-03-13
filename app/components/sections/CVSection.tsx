'use client';

import { DownloadIcon } from '@/app/components/ui/Icons';

export function CVSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="space-y-3 text-base leading-relaxed lg:space-y-4 lg:text-lg lg:leading-relaxed">
        <p>
          <span className="font-bold text-[var(--v-500)]">
            Thanks for your interest in my CV!
          </span>
        </p>
        <p className="text-[var(--ink)]">
          I&apos;ve collaborated with edtech, e-commerce, and content teams. I also
          build experiences with Moodle, H5P, and Rise, plus HTML/CSS support.
        </p>
        <p className="text-[var(--ink)]">
          Tell me your goal, and I&apos;ll show you how I can help with relevant
          projects.
        </p>
        <p className="text-[var(--ink)]">
          Want the full picture on one page? Tap &quot;Download CV&quot; below for my
          experience, projects, and tools at a glance.
        </p>
      </div>

      <a
        href="https://drive.google.com/file/d/11QHbtWFGJelGw1td08roLacim7cyv7Z7/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="msg-radius-alt btn-hover-lift link-hover inline-flex w-fit items-center gap-3 border-2 border-[var(--v-500)] bg-[var(--background-subtle)] px-4 py-3 font-bold text-[var(--v-500)] transition-all hover:bg-[var(--v-500)] hover:text-white lg:px-5 lg:py-4 lg:text-lg"
      >
        <DownloadIcon size={22} />
        <span>Download CV</span>
      </a>
    </div>
  );
}
