import type { Metadata, Viewport } from "next";
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
export const viewport:Viewport = { colorScheme:"dark", themeColor:"#07050d" };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="pt-BR"><body><div className="noise" aria-hidden="true"/><Header/>{children}<Footer/></body></html>; }
