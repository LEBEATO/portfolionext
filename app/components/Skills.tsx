"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Braces, CloudCog, Database, LayoutTemplate } from "lucide-react";
import { Reveal } from "./Reveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const groups = [
  { icon: LayoutTemplate, title: "Front-end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS"] },
  { icon: Braces, title: "Back-end", items: ["Node.js", "APIs REST", "Server Actions", "Autenticação", "Validação", "Prisma ORM"] },
  { icon: Database, title: "Dados", items: ["Supabase", "PostgreSQL", "Neon", "RLS", "Modelagem", "SQL"] },
  { icon: CloudCog, title: "Ferramentas", items: ["Git & GitHub", "Vercel", "Docker", "VS Code", "Figma", "Metodologias ágeis"] },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as { desktop: boolean; mobile: boolean; reduceMotion: boolean };
        const grid = gridRef.current;
        const cards = gsap.utils.toArray<HTMLElement>(".skill-card");
        const chips = gsap.utils.toArray<HTMLElement>(".skill-chip");

        if (!grid || reduceMotion) {
          gsap.set([...cards, ...chips], { clearProps: "all" });
          return;
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: grid,
            start: "clamp(top 88%)",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        timeline.from(cards, {
          x: (index) => desktop ? (index % 2 === 0 ? -44 : 44) : 0,
          y: desktop ? 0 : 24,
          scale: desktop ? 1 : 0.98,
          stagger: 0.1,
          duration: 0.7,
          immediateRender: false,
          clearProps: "transform",
        }).from(chips, {
          y: 8,
          stagger: 0.025,
          duration: 0.35,
          immediateRender: false,
          clearProps: "transform",
        }, "-=0.35");
      },
    );
    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="habilidades" className="section-space">
      <div className="container-shell">
        <Reveal><span className="eyebrow">Conhecimentos</span><h2 className="section-title max-w-2xl">Minha stack para criar do <span className="gradient-text">front ao deploy.</span></h2></Reveal>
        <div ref={gridRef} className="skills-grid mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map(({ icon: Icon, title, items }) => <article key={title} className="skill-card glass rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-400/30"><span className="grid size-11 place-items-center rounded-xl bg-purple-500/10 text-purple-300"><Icon size={22} /></span><h3 className="mt-5 text-lg font-extrabold">{title}</h3><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="skill-chip rounded-lg border border-white/8 bg-white/[.035] px-3 py-2 text-xs font-semibold text-white/55">{item}</span>)}</div></article>)}
        </div>
      </div>
    </section>
  );
}
