import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Certifique-se que este arquivo exista em app/globals.css
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Metadados para todo o site
export const metadata: Metadata = {
  // O título aparecerá na aba do navegador e nos resultados de busca
  title: {
    template: "%s | Alexandre Beato", // Usado para páginas internas (ex: "Projetos | Alexandre Beato")
    default: "Alexandre Beato | Desenvolvedor Front-end", // Título padrão para a página inicial
  },
  // A descrição é o texto que aparece abaixo do título nos resultados de busca
  description: "Portfólio de Alexandre Beato, um desenvolvedor front-end especializado em React, Next.js e tecnologias web modernas. Explore meus projetos e habilidades.",
  // Palavras-chave ajudam os buscadores a entender o conteúdo da sua página
  keywords: ["Desenvolvedor Front-end", "React", "Next.js", "TypeScript", "JavaScript", "Portfólio", "Alexandre Beato"],
  
  // Metadados Open Graph para compartilhamento em redes sociais (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Alexandre Beato | Desenvolvedor Front-end",
    description: "Portfólio de um desenvolvedor front-end apaixonado por criar soluções web modernas e eficientes.",
    url: "https://portfolionext-knav.vercel.app", // IMPORTANTE: Substitua pelo seu domínio real
    siteName: "Portfólio Alexandre Beato",
    images: [
      {
        url: "/portifolio.jpg", // A imagem deve estar em public/portifolio.jpg
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Metadados específicos para o Twitter
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Beato | Desenvolvedor Front-end",
    description: "Explore o portfólio de Alexandre Beato, desenvolvedor focado em React e Next.js.",
    // creator: "@seuTwitter", // IMPORTANTE: Substitua pelo seu usuário do Twitter
    images: ["/portifolio.jpg"], // A imagem deve estar em public/portifolio.jpg
  },

  // Tags para controlar como os robôs de busca rastreiam a página
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL("https://portfolionext-knav.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}