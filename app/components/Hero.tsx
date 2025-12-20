'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { splitText } from "motion-plus";
import { animate, stagger } from "motion";

export function Hero() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const { chars } = splitText(titleRef.current);
      animate(
        chars,
        { color: ["#c1f3a4", "#54f315"], opacity: [0, 1] } as any,
        { duration: 0.9, delay: stagger(0.06), repeat: Infinity, repeatDelay: 1, direction: "alternate" } as any
      );
    }

    if (textRef.current) {
      const { words } = splitText(textRef.current);
      animate(
        words,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.8, delay: stagger(0.05) }
      );
    }
  }, []);

  return (
    <section className="bg-gray-950 text-white py-24 sm:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Imagem - use uma imagem sua na pasta /public */}
        <div className="relative flex-shrink-0 mb-10 md:mb-0 md:mr-12">
          {/* Efeito de brilho ao redor da imagem */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-75"></div>
          <Image
            src="/foto.jpg" // Caminho da sua foto na pasta /public
            alt="Foto de perfil"
            width={200}
            height={200}
            className="relative rounded-2xl border-4 border-gray-800 shadow-lg"
            priority
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold mb-3">Alexandre Beato</h2>
          <h3 className="text-xl sm:text-2xl text-cyan-400 mb-6 font-medium">
            Desenvolvedor Front-end | React | Next.js
          </h3>
          <p ref={textRef} className="text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
           Sou desenvolvedor em formação, altamente motivado por tecnologia e por desafios que exigem aprendizado contínuo. Tenho foco em desenvolvimento web moderno, aplicando boas práticas, organização de código e atenção à experiência do usuário
          </p>
          <a
            href="#projetos" // Link para a futura seção de projetos
            className="inline-flex items-center gap-2 bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition-all transform hover:scale-105"
          >
            Ver meus projetos
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}