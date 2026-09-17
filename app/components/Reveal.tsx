"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = elementRef.current;
    if (!element) return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as {
          desktop: boolean;
          mobile: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) {
          gsap.set(element, { autoAlpha: 1, x: 0, y: 0 });
          return;
        }

        const distance = desktop ? 52 : 24;
        const from = direction === "left" ? { x: -distance, y: 0 } : direction === "right" ? { x: distance, y: 0 } : { x: 0, y: distance };

        gsap.fromTo(
          element,
          { autoAlpha: 0, ...from },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.85,
            delay,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: element, start: "clamp(top 86%)", once: true },
          },
        );
      },
    );

    return () => mm.revert();
  }, { scope: elementRef, dependencies: [delay, direction], revertOnUpdate: true });

  return <div ref={elementRef} className={`gsap-reveal ${className}`}>{children}</div>;
}
