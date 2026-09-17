import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const siteUrl = "https://portfolionext-knav.vercel.app";

export const metadata:Metadata = {
  metadataBase:new URL(siteUrl), title:"Alexandre Beato | Desenvolvedor Full Stack",
  description:"Portfólio de Alexandre Beato, desenvolvedor Full Stack especializado em Next.js, React, TypeScript, Node.js e Supabase.",
  keywords:["Desenvolvedor Full Stack","Next.js","React","TypeScript","Node.js","Supabase","Alexandre Beato"],
  authors:[{name:"Alexandre Beato",url:"https://github.com/LEBEATO"}], alternates:{canonical:"/"},
  openGraph:{title:"Alexandre Beato | Desenvolvedor Full Stack",description:"Aplicações web modernas, seguras e orientadas a resultados.",url:siteUrl,siteName:"Portfólio Alexandre Beato",images:[{url:"/portifolio.jpg",width:1200,height:630,alt:"Portfólio de Alexandre Beato"}],locale:"pt_BR",type:"website"},
  twitter:{card:"summary_large_image",title:"Alexandre Beato | Desenvolvedor Full Stack",description:"Aplicações web modernas, seguras e orientadas a resultados.",images:["/portifolio.jpg"]}, robots:{index:true,follow:true},
};
export const viewport:Viewport = { colorScheme:"dark light", themeColor:[{media:"(prefers-color-scheme: dark)",color:"#07050d"},{media:"(prefers-color-scheme: light)",color:"#f7f5fb"}] };
const themeScript = `(function(){try{var saved=localStorage.getItem('portfolio-theme');var theme=saved==='light'||saved==='dark'?saved:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(e){document.documentElement.dataset.theme='dark'}})()`;
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="pt-BR" data-theme="dark" suppressHydrationWarning><body><Script id="theme-init" strategy="beforeInteractive">{themeScript}</Script><div className="noise" aria-hidden="true"/><Header/>{children}<Footer/></body></html>; }
