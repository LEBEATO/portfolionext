"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export type ButtonFeedback = "idle" | "loading" | "success" | "error";

type SharedProps = {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  feedback?: ButtonFeedback;
};

function useMotionButton<T extends HTMLElement>(feedback: ButtonFeedback) {
  const ref = useRef<T>(null);

  useGSAP((_, contextSafe) => {
    const element = ref.current;
    if (!element || !contextSafe) return;

    const icon = element.querySelector(".motion-button-icon");
    const glow = element.querySelector(".motion-button-glow");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(element, { clearProps: "transform,boxShadow" });
      return;
    }

    const hoverIn = contextSafe(() => {
      gsap.to(element, { y: -2, scale: 1.025, duration: 0.09, ease: "power2.out", overwrite: "auto" });
      gsap.to(icon, { x: 4, scale: 1.08, duration: 0.12, ease: "power2.out", overwrite: "auto" });
      gsap.to(glow, { autoAlpha: 0.65, scale: 1.15, duration: 0.18, ease: "power2.out", overwrite: "auto" });
    });
    const hoverOut = contextSafe(() => {
      gsap.to(element, { y: 0, scale: 1, duration: 0.18, ease: "power2.out", overwrite: "auto" });
      gsap.to(icon, { x: 0, scale: 1, duration: 0.18, ease: "power2.out", overwrite: "auto" });
      gsap.to(glow, { autoAlpha: 0, scale: 1, duration: 0.18, ease: "power2.out", overwrite: "auto" });
    });
    const press = contextSafe(() => {
      gsap.to(element, { scale: 0.97, y: 0, duration: 0.06, ease: "power2.out", overwrite: "auto" });
    });
    const release = contextSafe(() => {
      gsap.timeline({ defaults: { overwrite: "auto" } })
        .to(element, { scale: 1.015, duration: 0.1, ease: "power2.out" })
        .to(element, { scale: 1, duration: 0.12, ease: "power2.out" });
    });

    element.addEventListener("pointerenter", hoverIn);
    element.addEventListener("pointerleave", hoverOut);
    element.addEventListener("pointerdown", press);
    element.addEventListener("pointerup", release);
    element.addEventListener("focus", hoverIn);
    element.addEventListener("blur", hoverOut);

    return () => {
      element.removeEventListener("pointerenter", hoverIn);
      element.removeEventListener("pointerleave", hoverOut);
      element.removeEventListener("pointerdown", press);
      element.removeEventListener("pointerup", release);
      element.removeEventListener("focus", hoverIn);
      element.removeEventListener("blur", hoverOut);
    };
  }, { scope: ref });

  useGSAP(() => {
    const element = ref.current;
    if (!element || feedback === "idle" || feedback === "loading" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (feedback === "success") {
      gsap.timeline()
        .to(element, { scale: 1.06, boxShadow: "0 0 30px rgba(52,211,153,.35)", duration: 0.18, ease: "back.out(1.4)" })
        .to(element, { scale: 1, boxShadow: "0 0 0 rgba(52,211,153,0)", duration: 0.24, ease: "power2.out" });
    } else {
      gsap.fromTo(element, { x: 0 }, { keyframes: { x: [-10, 8, -6, 4, 0] }, duration: 0.36, ease: "power1.inOut" });
    }
  }, { scope: ref, dependencies: [feedback], revertOnUpdate: true });

  return ref;
}

function Content({ children, icon, iconPosition = "end" }: Pick<SharedProps, "children" | "icon" | "iconPosition">) {
  return <>{icon && iconPosition === "start" ? <span className="motion-button-icon inline-flex">{icon}</span> : null}<span className="relative z-10">{children}</span>{icon && iconPosition === "end" ? <span className="motion-button-icon inline-flex">{icon}</span> : null}<span aria-hidden="true" className="motion-button-glow pointer-events-none absolute inset-0 -z-0 rounded-[inherit] bg-white/20 opacity-0 blur-md" /></>;
}

type MotionLinkProps = SharedProps & React.ComponentPropsWithoutRef<"a">;
export function MotionLink({ children, className = "", icon, iconPosition, feedback = "idle", ...props }: MotionLinkProps) {
  const ref = useMotionButton<HTMLAnchorElement>(feedback);
  return <a ref={ref} className={`motion-button relative isolate ${className}`} {...props}><Content icon={icon} iconPosition={iconPosition}>{children}</Content></a>;
}

type MotionButtonProps = SharedProps & React.ComponentPropsWithoutRef<"button">;
export function MotionButton({ children, className = "", icon, iconPosition, feedback = "idle", ...props }: MotionButtonProps) {
  const ref = useMotionButton<HTMLButtonElement>(feedback);
  return <button ref={ref} className={`motion-button relative isolate ${className}`} {...props}><Content icon={icon} iconPosition={iconPosition}>{children}</Content></button>;
}
