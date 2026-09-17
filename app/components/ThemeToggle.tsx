"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

gsap.registerPlugin(useGSAP);

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useGSAP((_, contextSafe) => {
    const button = buttonRef.current;
    if (!button || !contextSafe) return;

    const toggleTheme = contextSafe(() => {
      const currentTheme: Theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
      const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.fromTo(
          iconRef.current,
          { rotation: nextTheme === "light" ? -100 : 100, scale: 0.45, opacity: 0 },
          { rotation: 0, scale: 1, opacity: 1, duration: 0.3, ease: "power3.out", overwrite: "auto" },
        );
        gsap.fromTo(button, { scale: 0.92 }, { scale: 1, duration: 0.24, ease: "power3.out", overwrite: "auto" });
      }
    });

    button.addEventListener("click", toggleTheme);
    return () => button.removeEventListener("click", toggleTheme);
  }, { scope: buttonRef });

  return (
    <button
      ref={buttonRef}
      type="button"
      className="theme-toggle group grid size-10 place-items-center rounded-xl border transition-colors"
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar tema"
    >
      <span ref={iconRef} className="inline-flex" aria-hidden="true">
        <Sun className="theme-icon-sun" size={18} />
        <Moon className="theme-icon-moon" size={18} />
      </span>
    </button>
  );
}
