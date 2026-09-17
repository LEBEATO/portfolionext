"use client";
import { useEffect,useState } from "react";
import { Github,Linkedin,Menu,X } from "lucide-react";
import { MotionLink } from "./MotionButton";
import { ThemeToggle } from "./ThemeToggle";
const links=[{href:"#sobre",label:"Sobre"},{href:"#projetos",label:"Projetos"},{href:"#habilidades",label:"Stack"},{href:"#contato",label:"Contato"}];
export function Header(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>16);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
 return <header className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled?"site-header-scrolled py-3 shadow-2xl backdrop-blur-xl":"border-transparent bg-transparent py-5"}`}><div className="container-shell flex items-center justify-between">
  <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir para o início"><span className="grid size-10 place-items-center rounded-xl border border-purple-400/30 bg-purple-500/10 font-extrabold text-purple-300 transition group-hover:bg-purple-500/20">AB</span><span className="hidden text-sm font-bold tracking-wide text-white sm:block">Alexandre Beato</span></a>
  <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">{links.map(link=><a key={link.href} href={link.href} className="text-sm font-semibold text-white/65 transition hover:text-white">{link.label}</a>)}</nav>
  <div className="flex items-center gap-2"><ThemeToggle/><div className="hidden items-center gap-2 md:flex"><a href="https://github.com/LEBEATO" target="_blank" rel="noreferrer" aria-label="GitHub de Alexandre" className="rounded-lg p-2 text-white/60 transition hover:bg-white/5 hover:text-white"><Github size={19}/></a><a href="https://www.linkedin.com/in/alexandre-beato-451926190" target="_blank" rel="noreferrer" aria-label="LinkedIn de Alexandre" className="rounded-lg p-2 text-white/60 transition hover:bg-white/5 hover:text-white"><Linkedin size={19}/></a><MotionLink href="#contato" className="header-cta ml-2 inline-flex overflow-hidden rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-[#0b0811]">Vamos conversar</MotionLink></div>
  <button type="button" onClick={()=>setOpen(v=>!v)} className="menu-toggle rounded-xl border p-2 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Fechar menu":"Abrir menu"}>{open?<X/>:<Menu/>}</button></div>
 </div>{open&&<nav id="mobile-menu" className="mobile-menu container-shell mt-3 grid gap-1 rounded-2xl border p-3 shadow-2xl backdrop-blur-xl md:hidden" aria-label="Navegação mobile">{links.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-white/75 hover:bg-white/5 hover:text-white">{link.label}</a>)}</nav>}</header>;
}
