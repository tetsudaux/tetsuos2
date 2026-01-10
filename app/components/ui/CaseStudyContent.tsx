'use client';

import { PortfolioProject, CaseStudyBlock } from '@/app/types/chat';
import { Tag } from './Tag';
import {
  IconExternalLink,
  IconTrendingUp,
  IconUsers,
  IconEye,
  IconHeart,
  IconStar,
  IconRocket,
  IconTarget,
  IconChartBar,
  IconBrandYoutube,
  // Icons for skills
  IconBrush,
  IconCode,
  IconDeviceDesktop,
  IconPalette,
  IconCamera,
  IconPencil,
  IconLayersIntersect,
  IconVector,
  IconPhoto,
  IconVideo,
  IconWand,
  IconSparkles,
  IconBulb,
  IconPresentation,
  IconMessage,
  IconSettings,
  IconDatabase,
  IconCloud,
  IconShieldCheck,
  IconChartPie,
  IconLayout,
} from '@tabler/icons-react';

// Brand logos from Simple Icons
import {
  SiFigma,
  SiSketch,
  SiInvision,
  SiFramer,
  SiCanva,
  SiBlender,
  SiCinema4d,
  SiDavinciresolve,
  SiNotion,
  SiSlack,
  SiTrello,
  SiAsana,
  SiJira,
  SiGithub,
  SiGitlab,
  SiWebflow,
  SiShopify,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiPython,
  SiNodedotjs,
} from '@icons-pack/react-simple-icons';

interface CaseStudyContentProps {
  project: PortfolioProject;
}

// Icon mapping for metrics
const metricIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  trending: IconTrendingUp,
  users: IconUsers,
  eye: IconEye,
  heart: IconHeart,
  star: IconStar,
  rocket: IconRocket,
  target: IconTarget,
  chart: IconChartBar,
};

// Icon mapping for skills (Tabler icons)
const tablerIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  brush: IconBrush,
  code: IconCode,
  desktop: IconDeviceDesktop,
  palette: IconPalette,
  camera: IconCamera,
  pencil: IconPencil,
  layers: IconLayersIntersect,
  vector: IconVector,
  photo: IconPhoto,
  video: IconVideo,
  wand: IconWand,
  sparkles: IconSparkles,
  bulb: IconBulb,
  presentation: IconPresentation,
  message: IconMessage,
  users: IconUsers,
  settings: IconSettings,
  database: IconDatabase,
  cloud: IconCloud,
  shield: IconShieldCheck,
  chartPie: IconChartPie,
  layout: IconLayout,
};

// Brand logos mapping (Simple Icons)
const brandIcons: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  // Design Tools
  figma: SiFigma,
  sketch: SiSketch,
  invision: SiInvision,
  framer: SiFramer,
  canva: SiCanva,
  // 3D & Video
  blender: SiBlender,
  cinema4d: SiCinema4d,
  davinci: SiDavinciresolve,
  // Productivity
  notion: SiNotion,
  slack: SiSlack,
  trello: SiTrello,
  asana: SiAsana,
  jira: SiJira,
  // Dev Tools
  github: SiGithub,
  gitlab: SiGitlab,
  // Web Platforms
  webflow: SiWebflow,
  shopify: SiShopify,
  // Languages & Frameworks
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss,
  python: SiPython,
  nodejs: SiNodedotjs,
};

// Text Block
function TextBlock({ block, accentColor, index }: { block: Extract<CaseStudyBlock, { type: 'text' }>; accentColor: string; index: number }) {
  return (
    <section className="animate-content-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      {block.title && (
        <h2 className={`mb-4 text-xl font-bold ${accentColor} lg:text-2xl`}>
          {block.title}
        </h2>
      )}
      <p className="text-base leading-relaxed text-gray-700 lg:text-lg">
        {block.value}
      </p>
    </section>
  );
}

// Text Featured Block (like challenge)
function TextFeaturedBlock({ block, accentColor, borderColor, lightBg, index }: {
  block: Extract<CaseStudyBlock, { type: 'text-featured' }>;
  accentColor: string;
  borderColor: string;
  lightBg: string;
  index: number;
}) {
  return (
    <section
      className={`animate-content-fade-in rounded-[12px] border-2 ${borderColor} ${lightBg} p-5 lg:p-6`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {block.title && (
        <h2 className={`mb-4 text-xl font-bold ${accentColor} lg:text-2xl`}>
          {block.title}
        </h2>
      )}
      <p className="text-base leading-relaxed text-gray-700 lg:text-lg">
        {block.value}
      </p>
    </section>
  );
}

// Image Block (1:1, full width)
function ImageBlock({ block, index }: { block: Extract<CaseStudyBlock, { type: 'image' }>; index: number }) {
  return (
    <section className="animate-content-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="aspect-square w-full overflow-hidden rounded-[12px]">
        <img
          src={block.src}
          alt={block.alt || 'Imagen del proyecto'}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

// Gallery Block (1:1 images, 2 columns, minimal gap)
function GalleryBlock({ block, index }: { block: Extract<CaseStudyBlock, { type: 'gallery' }>; index: number }) {
  return (
    <section className="animate-content-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="grid grid-cols-2 gap-2">
        {block.images.map((image, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-[12px]">
            <img
              src={image.src}
              alt={image.alt || `Imagen ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// YouTube Video Block
function VideoBlock({ block, index }: { block: Extract<CaseStudyBlock, { type: 'video' }>; index: number }) {
  return (
    <section className="animate-content-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      {block.title && (
        <div className="mb-3 flex items-center gap-2">
          <IconBrandYoutube size={24} className="text-red-500" />
          <h3 className="text-lg font-bold text-gray-800">{block.title}</h3>
        </div>
      )}
      <div className="aspect-video w-full overflow-hidden rounded-[12px]">
        <iframe
          src={`https://www.youtube.com/embed/${block.youtubeId}`}
          title={block.title || 'Video del proyecto'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </section>
  );
}

// Metrics Block (large, animated, with icons)
function MetricsBlock({ block, accentColor, bgColor, index }: {
  block: Extract<CaseStudyBlock, { type: 'metrics' }>;
  accentColor: string;
  bgColor: string;
  index: number;
}) {
  return (
    <section
      className={`animate-content-fade-in rounded-[12px] ${bgColor} p-5 lg:p-6`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`grid gap-4 ${block.items.length === 1 ? 'grid-cols-1' : block.items.length === 2 ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-3'}`}>
        {block.items.map((item, i) => {
          const IconComponent = item.icon ? metricIcons[item.icon] : IconTrendingUp;
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-2 text-center animate-fade-in-up"
              style={{ animationDelay: `${(index * 100) + (i * 150)}ms` }}
            >
              {IconComponent && (
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-white/20">
                  <IconComponent size={28} className="text-white" />
                </div>
              )}
              <span className="text-3xl font-bold text-white lg:text-4xl animate-number-count">
                {item.value}
              </span>
              <span className="text-sm text-white/80 lg:text-base">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Link Block (with icon)
function LinkBlock({ block, accentColor, borderColor, index }: {
  block: Extract<CaseStudyBlock, { type: 'link' }>;
  accentColor: string;
  borderColor: string;
  index: number;
}) {
  return (
    <section className="animate-content-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <a
        href={block.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 rounded-[12px] border-2 ${borderColor} bg-white px-5 py-3 font-semibold ${accentColor} transition-all hover:bg-[var(--v-500)] hover:text-white hover:border-[var(--v-500)] lg:px-6 lg:py-4`}
      >
        <IconExternalLink size={20} />
        <span>{block.label}</span>
      </a>
    </section>
  );
}

// Skills Block (pills with icons, 2 columns)
function SkillsBlock({ block, accentColor, bgColor, index }: {
  block: Extract<CaseStudyBlock, { type: 'skills' }>;
  accentColor: string;
  bgColor: string;
  index: number;
}) {
  return (
    <section className="animate-content-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      {block.title && (
        <h2 className={`mb-4 text-xl font-bold ${accentColor} lg:text-2xl`}>
          {block.title}
        </h2>
      )}
      <div className="grid grid-cols-2 gap-3">
        {block.items.map((item, i) => {
          const BrandIcon = brandIcons[item.icon];
          const TablerIcon = tablerIcons[item.icon];

          return (
            <div
              key={i}
              className={`flex items-center gap-3 rounded-[12px] ${bgColor} px-4 py-3 animate-fade-in-up`}
              style={{ animationDelay: `${(index * 100) + (i * 80)}ms` }}
            >
              {BrandIcon ? (
                <BrandIcon size={20} color="#ffffff" />
              ) : TablerIcon ? (
                <TablerIcon size={20} className="shrink-0 text-white" />
              ) : (
                <IconSparkles size={20} className="shrink-0 text-white" />
              )}
              <span className="text-sm font-medium text-white lg:text-base">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const accentColor = project.category === 'product'
    ? 'text-[var(--v-500)]'
    : 'text-[var(--mg-500)]';

  const borderColor = project.category === 'product'
    ? 'border-[var(--v-500)]'
    : 'border-[var(--mg-500)]';

  const bgColor = project.category === 'product'
    ? 'bg-[var(--v-800)]'
    : 'bg-[var(--mg-700)]';

  const lightBg = project.category === 'product'
    ? 'bg-[var(--v-50)]'
    : 'bg-[var(--mg-300)]/20';

  // Default content if no caseStudy
  const defaultContent: CaseStudyBlock[] = [
    { type: 'text', title: 'Descripción', value: 'Este proyecto aún no tiene descripción detallada.' },
  ];

  const content = project.caseStudy?.content || defaultContent;

  return (
    <div className="p-6 pb-28 lg:p-8 lg:pb-8">
      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <Tag key={index} type={tag.type} label={tag.label} size="sm" />
        ))}
      </div>

      <div className="mx-auto max-w-3xl space-y-8">
        {content.map((block, index) => {
          switch (block.type) {
            case 'text':
              return <TextBlock key={index} block={block} accentColor={accentColor} index={index} />;
            case 'text-featured':
              return <TextFeaturedBlock key={index} block={block} accentColor={accentColor} borderColor={borderColor} lightBg={lightBg} index={index} />;
            case 'image':
              return <ImageBlock key={index} block={block} index={index} />;
            case 'gallery':
              return <GalleryBlock key={index} block={block} index={index} />;
            case 'video':
              return <VideoBlock key={index} block={block} index={index} />;
            case 'metrics':
              return <MetricsBlock key={index} block={block} accentColor={accentColor} bgColor={bgColor} index={index} />;
            case 'link':
              return <LinkBlock key={index} block={block} accentColor={accentColor} borderColor={borderColor} index={index} />;
            case 'skills':
              return <SkillsBlock key={index} block={block} accentColor={accentColor} bgColor={bgColor} index={index} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
