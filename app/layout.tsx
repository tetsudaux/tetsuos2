import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";
import { SharedElementModal } from "./components/ui/SharedElementModal";
import { BuildInfo } from "./components/ui/BuildInfo";

export const metadata: Metadata = {
  title: "Tetsu Osnaya | Product Designer",
  description: "Tetsu Osnaya's portfolio — Product Designer. I design solutions to increase conversion and reduce friction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Noto+Sans+JP:wght@700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ModalProvider>
            {children}
            <SharedElementModal />
            <BuildInfo />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
