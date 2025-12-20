"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#sobre", label: "PERFIL |" },
    { href: "#projetos", label: "PROJETOS |" },
    { href: "#habilidades", label: "SKILLS |" },
    { href: "#contato", label: "CONTATO |" },
  ];

  return (
    <header className="bg-gray-950 backdrop-blur-lg shadow-2xl text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">DEV <span className="text-amber-300 font-medium"> ALEXANDRE</span></h1>

        {/* Navegação para telas grandes */}
        <nav className="hidden md:flex items-center font-medium gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-gray-300 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/LEBEATO" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Botão do menu para telas pequenas */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu móvel */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 rounded-lg p-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors w-full text-center py-2">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}