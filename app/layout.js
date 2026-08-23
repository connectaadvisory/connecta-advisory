import "./globals.css";

export const metadata = {
  title: "Connecta Advisory — Consultoria em Telecomunicações",
  description:
    "Comparamos as melhores ofertas de internet, TV e voz do mercado para a sua morada — e tratamos de toda a mudança por si.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
