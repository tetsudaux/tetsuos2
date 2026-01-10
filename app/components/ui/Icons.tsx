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
  diseño: IconPaletteFilled,
  código: IconCodeCircleFilled,
  'social-media': IconUsers,
  ai: IconSparkles,
  producto: IconClockFilled,
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

// Re-export individual icons for direct use
export {
  IconClipboardFilled as ClipboardIcon,
  IconLayoutFilled as LayoutIcon,
  IconMessageFilled as MessagesIcon,
  IconHomeFilled as HomeIcon,
  IconDownload as DownloadIcon,
  IconPlayerPlayFilled as VideoIcon,
  IconPaletteFilled as DesignIcon,
  IconCodeCircleFilled as CodeIcon,
  IconUsers as SocialIcon,
  IconSparkles as SparklesIcon,
  IconClockFilled as ProductIcon,
  IconChartBar as MarketingIcon,
  IconBrandWhatsappFilled as WhatsAppIcon,
  IconPhoneFilled as ZoomIcon,
  IconBrandLinkedinFilled as LinkedInIcon,
  IconMailFilled as MailIcon,
};
