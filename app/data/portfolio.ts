import { PortfolioProject, QuickReply } from '@/app/types/chat';
import { CaseStudyContent } from '../components/ui/CaseStudyContent';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Creación de Contenido',
    company: 'Canal de YouTube',
    tags: [
      { type: 'video', label: 'Video' },
      { type: 'social-media', label: 'Social Media' },
    ],
    category: 'design',
    image: 'https://tetsuos.com/wp-content/uploads/2024/05/youtube-channel-thumbnail.png',
    caseStudy: {
      content: [
        { type: 'link', href: 'https://www.youtube.com/@nicoliense', label: 'Ver canal en YouTube' },
        { type: 'skills', title: 'Herramientas utilizadas', items: [
          { icon: 'video', label: 'Premiere Pro' },
          { icon: 'wand', label: 'After Effects' },
          { icon: 'photo', label: 'Photoshop' },
          { icon: 'vector', label: 'Illustrator' },
        ]},
        { type: 'video', youtubeId: 'hMh8jDh_qQA', title: 'Video destacado' },
        /*
        { type: 'text', title: '', value: 'Audiovisual Production: script creation, photography, video editing, publication of content on social networks. ' },
        { type: 'text-featured', title: 'The Goal', value: 'The goal was to learn how to create content for a YouTube channel and how to use social media to promote it.' },
        
        { type: 'text', title: 'La Solución', value: 'Implementé un nuevo formato de videos con storytelling, mejor edición y un calendario de publicación consistente.' },
        { type: 'gallery', images: [
          { src: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=600&fit=crop', alt: 'Thumbnail 1' },
          { src: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=600&fit=crop', alt: 'Thumbnail 2' },
          { src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=600&fit=crop', alt: 'Thumbnail 3' },
          { src: 'https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=600&h=600&fit=crop', alt: 'Thumbnail 4' },
        ]},
        { type: 'metrics', items: [
          { icon: 'users', value: '+300%', label: 'Suscriptores' },
          { icon: 'eye', value: '+150%', label: 'Tiempo de visualización' },
          { icon: 'heart', value: '+200%', label: 'Engagement' },
        ]},
        */
      ],
    },
  },
  {
    id: '2',
    title: 'Diseñador gráfico',
    company: 'IQC',
    tags: [
      { type: 'diseño', label: 'Diseño' },
      { type: 'social-media', label: 'Social Media' },
   
    ],
    category: 'design',
    image: 'https://tetsuos.com/wp-content/uploads/2024/05/iqc-thumbnail.png',
    caseStudy: {
      content: [
        { type: 'text', title: 'Activities', value: 'Translating the ideas of the clients in graphics according to their needs. Designing business cards, catalogs, flyers, banners, mockups and videos for social media. ' },
        { type: 'gallery', images: [
          { src: '/assets/iqc1.webp', alt: 'IQC 1' },
          { src: '/assets/iqc2.webp', alt: 'IQC 2' },
          { src: '/assets/iqc3.webp', alt: 'IQC 3' },
          { src: '/assets/iqc4.webp', alt: 'IQC 4' },
          { src: '/assets/iqc5.webp', alt: 'IQC 5' },
          { src: '/assets/iqc6.webp', alt: 'IQC 6' },
          { src: '/assets/iqc7.webp', alt: 'IQC 7' },
          { src: '/assets/iqc8.webp', alt: 'IQC 8' },
        ]},
      ],
    },
  },
  {
    id: '3',
    title: 'Diseñador digital',
    company: 'Elementia Materiales',
    tags: [
      { type: 'video', label: 'Video' },
      { type: 'diseño', label: 'Diseño' },
    ],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
  },
  {
    id: '4',
    title: 'Diseñador Web',
    company: 'XX Studio',
    tags: [
      { type: 'diseño', label: 'Diseño' },
      { type: 'código', label: 'Código' },
    ],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
  },
  {
    id: '5',
    title: 'Diseñador Web',
    company: 'Aprende Institute',
    tags: [
      { type: 'diseño', label: 'Diseño' },
      { type: 'código', label: 'Código' },
    ],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
  },
  {
    id: '6',
    title: 'Diseñador Gráfico',
    company: 'U CAMP',
    tags: [{ type: 'diseño', label: 'Diseño' }],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
  },
  {
    id: '7',
    title: 'Diseño & Marketing',
    company: 'Nuneth',
    tags: [
      { type: 'diseño', label: 'Diseño' },
      { type: 'social-media', label: 'Social Media' },
    ],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    id: '8',
    title: 'Diseño Web',
    company: 'Consubanco',
    tags: [
      { type: 'diseño', label: 'Diseño' },
      { type: 'código', label: 'Código' },
    ],
    category: 'design',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop',
  },
  {
    id: '9',
    title: 'Creación de Contenido IA',
    company: 'Puerta Celeste',
    tags: [
      { type: 'ai', label: 'AI' },
      { type: 'video', label: 'Video' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    id: '10',
    title: 'Lead Magnet',
    company: 'The Old School Services',
    tags: [
      { type: 'ai', label: 'AI' },
      { type: 'producto', label: 'Producto' },
    ],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: '11',
    title: 'UX Designer',
    company: 'Crehana Project',
    tags: [{ type: 'producto', label: 'Producto' }],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
  },
  {
    id: '12',
    title: 'Product Management',
    company: 'Coderhouse Project',
    tags: [{ type: 'producto', label: 'Producto' }],
    category: 'product',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop',
  },
];

export const initialReplies: QuickReply[] = [
  { id: 'ver-cv', label: 'Ver tu CV', icon: 'clipboard', section: 'cv' },
  { id: 'ver-trabajo', label: 'Ver tu trabajo', icon: 'layout', section: 'portfolio' },
  { id: 'hablemos', label: 'Hablemos', icon: 'messages', section: 'contact' },
];

export const cvReplies: QuickReply[] = [
  { id: 'ver-trabajo', label: 'Ver tu trabajo', icon: 'layout', section: 'portfolio' },
  { id: 'hablemos', label: 'Hablemos', icon: 'messages', section: 'contact' },
  { id: 'ir-inicio', label: 'Ir a Inicio', icon: 'home', section: 'welcome' },
];

export const portfolioReplies: QuickReply[] = [
  { id: 'ver-cv', label: 'Ver tu CV', icon: 'clipboard', section: 'cv' },
  { id: 'hablemos', label: 'Hablemos', icon: 'messages', section: 'contact' },
  { id: 'ir-inicio', label: 'Ir a Inicio', icon: 'home', section: 'welcome' },
];

export const contactReplies: QuickReply[] = [
  { id: 'ver-cv', label: 'Ver tu CV', icon: 'clipboard', section: 'cv' },
  { id: 'ver-trabajo', label: 'Ver tu trabajo', icon: 'layout', section: 'portfolio' },
  { id: 'ir-inicio', label: 'Ir a Inicio', icon: 'home', section: 'welcome' },
];

export const getRepliesForSection = (section: string): QuickReply[] => {
  switch (section) {
    case 'cv':
      return cvReplies;
    case 'portfolio':
      return portfolioReplies;
    case 'contact':
      return contactReplies;
    default:
      return initialReplies;
  }
};
