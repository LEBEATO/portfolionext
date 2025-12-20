import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center sm:text-left">
          © {currentYear} Seu Nome. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/LEBEATO"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}