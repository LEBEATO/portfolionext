"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectPreview } from "./ProjectPreview";
import { MotionLink } from "./MotionButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  index: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  variant: "fleet" | "pets" | "shop";
};

export function ProjectCard({ index, title, description, highlights, tags, githubUrl, liveUrl, variant }: Props) {
  const cardRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;
    const preview = card.querySelector<HTMLElement>(".project-preview");
    const content = card.querySelector<HTMLElement>(".project-content");
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        mobile: "(max-width: 1023px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (mediaContext) => {
        const { desktop, reduceMotion } = mediaContext.conditions as {
          desktop: boolean;
          mobile: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) {
          gsap.set([card, preview, content], { autoAlpha: 1, x: 0, y: 0, scale: 1, rotationX: 0, rotationY: 0 });
          return;
        }

        const fromX = desktop ? (Number(index) % 2 === 0 ? 72 : -72) : 0;
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: card, start: "clamp(top 84%)", once: true },
          defaults: { ease: "power3.out" },
        });

        timeline
          .from(card, { autoAlpha: 0, x: fromX, y: desktop ? 0 : 36, duration: 0.85 })
          .from(preview, { autoAlpha: 0, scale: 0.94, duration: 0.7 }, "-=0.5")
          .from(content?.children ?? [], { autoAlpha: 0, y: 18, stagger: 0.06, duration: 0.45 }, "-=0.45");

        if (!desktop || !preview) return;

        const rotateX = gsap.quickTo(preview, "rotationX", { duration: 0.45, ease: "power3.out" });
        const rotateY = gsap.quickTo(preview, "rotationY", { duration: 0.45, ease: "power3.out" });
        const scale = gsap.quickTo(preview, "scale", { duration: 0.45, ease: "power3.out" });

        const onPointerMove = (event: PointerEvent) => {
          const bounds = preview.getBoundingClientRect();
          rotateY(((event.clientX - bounds.left) / bounds.width - 0.5) * 7);
          rotateX(((event.clientY - bounds.top) / bounds.height - 0.5) * -7);
          scale(1.018);
        };
        const onPointerLeave = () => {
          rotateX(0);
          rotateY(0);
          scale(1);
        };

        preview.addEventListener("pointermove", onPointerMove);
        preview.addEventListener("pointerleave", onPointerLeave);
        return () => {
          preview.removeEventListener("pointermove", onPointerMove);
          preview.removeEventListener("pointerleave", onPointerLeave);
        };
      },
    );

    return () => mm.revert();
  }, { scope: cardRef, dependencies: [index], revertOnUpdate: true });

  return (
    <article ref={cardRef} className="project-card group glass grid overflow-hidden rounded-[2rem] lg:grid-cols-[1.05fr_.95fr]">
      <div className="project-preview overflow-hidden lg:order-2"><ProjectPreview variant={variant} /></div>
      <div className="project-content flex flex-col p-6 sm:p-8 lg:order-1 lg:p-10">
        <span className="text-xs font-extrabold tracking-[.2em] text-purple-300">PROJETO {index}</span>
        <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h3>
        <p className="mt-4 leading-7 text-white/55">{description}</p>
        <ul className="mt-6 grid gap-2 text-sm text-white/70">{highlights.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />{item}</li>)}</ul>
        <div className="mt-7 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-white/60">{tag}</span>)}</div>
        <div className="mt-8 flex flex-wrap gap-3"><MotionLink href={liveUrl} target="_blank" rel="noreferrer" icon={<ArrowUpRight size={17} />} className="inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-4 py-2.5 text-sm font-extrabold text-[#0b0811]">Ver projeto</MotionLink><MotionLink href={githubUrl} target="_blank" rel="noreferrer" icon={<Github size={17} />} iconPosition="start" className="inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 px-4 py-2.5 text-sm font-bold text-white/70">Código</MotionLink></div>
      </div>
    </article>
  );
}
