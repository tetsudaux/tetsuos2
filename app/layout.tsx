import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "./context/ModalContext";
import { SharedElementModal } from "./components/ui/SharedElementModal";

export const metadata: Metadata = {
  title: "Tetsu Osnaya | UX/UI Designer",
  description: "Portfolio de Tetsu Osnaya - Diseñador UX/UI. Diseño soluciones para aumentar conversión y reducir fricción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Noto+Sans+JP:wght@700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ModalProvider>
          {children}
          <SharedElementModal />
        </ModalProvider>
      </body>
    </html>
  );
}
