"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ArrowDownRight, Code2, Github, Linkedin, MapPin } from "lucide-react";
import { MotionLink } from "./MotionButton";

gsap.registerPlugin(useGSAP, SplitText);

const words = ["Full Stack", "Next.js", "React", "TypeScript"];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        desktop: "(min-width: 1024px)",
        mobile: "(max-width: 1023px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as {
          desktop: boolean;
          mobile: boolean;
          reduceMotion: boolean;
        };

        const targets = ".hero-status, .hero-kicker, .hero-copy, .hero-actions, .hero-meta, .hero-portrait";
        if (reduceMotion) {
          gsap.set(targets, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
          return;
        }

        const title = SplitText.create(".hero-title", {
          type: "words,chars",
          wordsClass: "hero-word",
          charsClass: "hero-char",
          aria: "auto",
        });

        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        timeline
          .from(".hero-status", { autoAlpha: 0, y: 18, duration: 0.55 })
          .from(".hero-kicker", { autoAlpha: 0, y: 20, duration: 0.55 }, "-=0.3")
          .from(title.chars, { autoAlpha: 0, yPercent: 115, rotationX: -70, transformOrigin: "50% 100%", stagger: 0.025, duration: 0.72 }, "-=0.25")
          .from(".hero-copy", { autoAlpha: 0, y: 24, duration: 0.65 }, "-=0.35")
          .from(".hero-actions > *", { autoAlpha: 0, y: 18, stagger: 0.1, duration: 0.5 }, "-=0.35")
          .from(".hero-meta > *", { autoAlpha: 0, x: -14, stagger: 0.08, duration: 0.45 }, "-=0.25")
          .from(".hero-portrait", { autoAlpha: 0, x: desktop ? 64 : 0, y: desktop ? 0 : 30, scale: 0.9, duration: 0.95 }, 0.3)
          .from(".hero-badge", { autoAlpha: 0, y: 24, scale: 0.92, duration: 0.55 }, "-=0.35");

        gsap.to(".hero-orb", { xPercent: 14, yPercent: -10, scale: 1.12, duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut" });

        if (desktop) {
          gsap.to(".hero-portrait", { y: -12, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.2 });
        }

        return () => title.revert();
      },
    );

    return () => mm.revert();
  }, { scope: heroRef });

  return (
    <section ref={heroRef} id="inicio" className="relative min-h-screen overflow-hidden pt-28">
      <div className="grid-glow absolute inset-0 -z-10" />
      <div className="hero-orb absolute left-[8%] top-32 -z-10 size-72 rounded-full bg-purple-600/15 blur-[110px]" />
      <div className="container-shell grid min-h-[calc(100vh-7rem)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="hero-status mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-bold text-emerald-300"><span className="size-2 animate-pulse rounded-full bg-emerald-400" />Disponível para oportunidades</div>
          <p className="hero-kicker mb-4 text-sm font-extrabold uppercase tracking-[.2em] text-purple-300">Olá, eu sou Alexandre Beato</p>
          <h1 className="hero-title max-w-4xl text-[clamp(3rem,8vw,6.6rem)] font-extrabold leading-[.94] tracking-[-.065em]">Desenvolvedor <span className="gradient-text">Full Stack</span></h1>
          <p className="hero-copy mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">Transformo ideias em aplicações web rápidas, seguras e fáceis de usar, unindo interfaces modernas, APIs e bancos de dados preparados para problemas reais.</p>
          <div className="hero-actions mt-9 flex flex-wrap gap-3"><MotionLink href="#projetos" icon={<ArrowDownRight size={18} />} className="inline-flex items-center gap-2 overflow-hidden rounded-xl bg-purple-500 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-purple-600/20">Explorar projetos</MotionLink><MotionLink href="#contato" className="inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/12 bg-white/5 px-5 py-3.5 text-sm font-bold text-white">Entrar em contato</MotionLink></div>
          <div className="hero-meta mt-9 flex flex-wrap items-center gap-5 text-sm text-white/50"><span className="flex items-center gap-2"><MapPin size={16} />Poços de Caldas, MG</span><a href="https://github.com/LEBEATO" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><Github size={17} />GitHub</a><a href="https://www.linkedin.com/in/alexandre-beato-451926190" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><Linkedin size={17} />LinkedIn</a></div>
        </div>
        <div className="hero-portrait relative mx-auto w-full max-w-md"><div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-purple-500/25 to-cyan-400/10 blur-3xl" /><div className="glass relative overflow-hidden rounded-[2rem] p-3"><div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" /><Image src="/alexandre-beato-portfolio.jpg" alt="Alexandre Beato, desenvolvedor Full Stack" width={1024} height={1280} priority sizes="(max-width: 1024px) 90vw, 420px" className="aspect-[4/5] w-full rounded-[1.45rem] object-cover object-center" /><div className="hero-badge absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-[#09060f]/80 p-4 backdrop-blur-xl"><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-purple-500/15 text-purple-300"><Code2 /></span><div><p className="text-sm font-extrabold">Tecnologia com propósito</p><p className="mt-1 text-xs text-white/50">{words.join(" · ")}</p></div></div></div></div></div>
      </div>
    </section>
  );
}
