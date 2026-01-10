export type Section = 'welcome' | 'cv' | 'portfolio' | 'contact';

export type MessageSender = 'tetsu' | 'user';

export interface Message {
  id: string;
  sender: MessageSender;
  content: string;
  section?: Section;
  timestamp: number;
}

export interface QuickReply {
  id: string;
  label: string;
  icon: 'clipboard' | 'layout' | 'messages' | 'home' | 'download';
  section: Section;
}

export type TagType =
  | 'video'
  | 'diseño'
  | 'social-media'
  | 'código'
  | 'marketing'
  | 'ai'
  | 'producto';

export interface Tag {
  type: TagType;
  label: string;
}

// Case Study flexible content blocks
export type CaseStudyBlock =
  | { type: 'text'; title?: string; value: string }
  | { type: 'text-featured'; title?: string; value: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'gallery'; images: { src: string; alt?: string }[] }
  | { type: 'video'; youtubeId: string; title?: string }
  | { type: 'metrics'; items: { icon?: string; value: string; label: string }[] }
  | { type: 'link'; href: string; label: string; icon?: string }
  | { type: 'skills'; title?: string; items: { icon: string; label: string }[] };

export interface CaseStudy {
  content: CaseStudyBlock[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  company: string;
  tags: Tag[];
  category: 'design' | 'product';
  image: string;
  caseStudy?: CaseStudy;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  currentSection: Section;
  availableReplies: QuickReply[];
}

export type ChatAction =
  | { type: 'ADD_USER_MESSAGE'; payload: { content: string; section: Section } }
  | { type: 'ADD_TETSU_MESSAGE'; payload: { content: string; section: Section } }
  | { type: 'SET_TYPING'; payload: boolean }
  | { type: 'SET_SECTION'; payload: Section }
  | { type: 'SET_REPLIES'; payload: QuickReply[] }
  | { type: 'RESET_CHAT' };
