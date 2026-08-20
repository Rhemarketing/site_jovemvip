import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Arena Jovem VIP | Futebol, Escolinha e Eventos em Ituiutaba";
const description =
  "Arena coberta com gramado sintético, escolinha de futebol, campeonatos, aniversários e reservas em Ituiutaba.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";

  return {
    ...(host ? { metadataBase: new URL(`${protocol}://${host}`) } : {}),
    title,
    description,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      title,
      description,
      images: [{ url: "/assets/previa.jpg", alt: "Arena Jovem VIP" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/previa.jpg"],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

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
