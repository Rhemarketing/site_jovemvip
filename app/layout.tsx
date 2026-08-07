import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arena Jovem VIP | Futebol, Escolinha e Eventos em Ituiutaba",
  description: "Arena coberta com gramado sintético, escolinha de futebol, campeonatos, aniversários e reservas em Ituiutaba.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
