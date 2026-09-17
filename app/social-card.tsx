/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };

export function createSocialImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        color: "#f8f5ff",
        background: "radial-gradient(circle at 18% 12%, #4c1d74 0%, #171020 34%, #07050d 72%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.2, backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
      <div style={{ position: "absolute", right: -90, top: -120, width: 520, height: 520, display: "flex", borderRadius: 999, background: "#0891b2", opacity: 0.18, filter: "blur(70px)" }} />
      <div style={{ position: "absolute", left: -120, bottom: -170, width: 520, height: 520, display: "flex", borderRadius: 999, background: "#9333ea", opacity: 0.2, filter: "blur(80px)" }} />

      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "58px 64px", gap: 56 }}>
        <div style={{ width: 440, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#d8b4fe", fontSize: 20, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase" }}>
            <span style={{ width: 38, height: 2, display: "flex", background: "#c084fc" }} />
            Portfólio profissional
          </div>
          <div style={{ display: "flex", marginTop: 30, fontSize: 60, lineHeight: 1.02, letterSpacing: -2.8, fontWeight: 800, whiteSpace: "nowrap" }}>
            Alexandre Beato
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 34, lineHeight: 1.15, fontWeight: 700, color: "#c084fc" }}>
            Desenvolvedor Full Stack
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 21, lineHeight: 1.45, color: "rgba(248,245,255,.72)" }}>
            Aplicações web modernas, seguras e orientadas a resultados.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 30 }}>
            {["Next.js", "React", "TypeScript", "Node.js", "Supabase"].map((item) => (
              <span key={item} style={{ display: "flex", padding: "9px 14px", borderRadius: 999, border: "1px solid rgba(216,180,254,.28)", background: "rgba(168,85,247,.11)", color: "#ede9fe", fontSize: 15, fontWeight: 700 }}>{item}</span>
            ))}
          </div>
        </div>

        <div style={{ width: 520, height: 520, display: "flex", position: "relative", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 4, display: "flex", borderRadius: 42, background: "linear-gradient(135deg, rgba(168,85,247,.6), rgba(34,211,238,.35))", filter: "blur(18px)", opacity: 0.72 }} />
          <div style={{ width: 430, height: 520, display: "flex", position: "relative", overflow: "hidden", borderRadius: 36, border: "2px solid rgba(255,255,255,.16)", background: "#0b0811", boxShadow: "0 28px 70px rgba(0,0,0,.45)" }}>
            <img src="https://portfolionext-knav.vercel.app/alexandre-beato-portfolio.jpg" width="430" height="538" alt="" style={{ width: "430px", height: "538px", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div style={{ position: "absolute", right: 18, bottom: 18, display: "flex", alignItems: "center", gap: 10, padding: "13px 18px", borderRadius: 18, border: "1px solid rgba(255,255,255,.15)", background: "rgba(8,5,14,.86)", color: "#f8f5ff", fontSize: 16, fontWeight: 700 }}>
            <span style={{ width: 9, height: 9, display: "flex", borderRadius: 999, background: "#34d399" }} />
            Disponível para oportunidades
          </div>
        </div>
      </div>
    </div>,
    socialImageSize,
  );
}
