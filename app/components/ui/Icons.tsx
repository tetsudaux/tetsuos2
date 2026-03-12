import {
  IconClipboardFilled,
  IconLayoutFilled,
  IconMessageFilled,
  IconHomeFilled,
  IconDownload,
  IconPlayerPlayFilled,
  IconPaletteFilled,
  IconCodeCircleFilled,
  IconUsers,
  IconSparkles,
  IconClockFilled,
  IconChartBar,
  IconBrandWhatsappFilled,
  IconPhoneFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from '@tabler/icons-react';

export const iconMap = {
  clipboard: IconClipboardFilled,
  layout: IconLayoutFilled,
  messages: IconMessageFilled,
  home: IconHomeFilled,
  download: IconDownload,
  video: IconPlayerPlayFilled,
  design: IconPaletteFilled,
  code: IconCodeCircleFilled,
  'social-media': IconUsers,
  ai: IconSparkles,
  product: IconClockFilled,
  marketing: IconChartBar,
  whatsapp: IconBrandWhatsappFilled,
  zoom: IconPhoneFilled,
  linkedin: IconBrandLinkedinFilled,
  email: IconMailFilled,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className }: IconProps) {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent size={size} className={className} /> : null;
}

// Re-export icons used directly in components
export {
  IconDownload as DownloadIcon,
  IconBrandWhatsappFilled as WhatsAppIcon,
  IconPhoneFilled as ZoomIcon,
  IconBrandLinkedinFilled as LinkedInIcon,
  IconMailFilled as MailIcon,
};
