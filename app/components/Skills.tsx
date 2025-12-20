"use client";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPrisma,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Prisma", icon: <SiPrisma className="text-gray-300" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
];

export function Skills() {
  return (
    <section
      id="habilidades"
      className="bg-gray-950 text-white py-20 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-center mb-4">
          Minhas Habilidades
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Tecnologias e ferramentas com as quais tenho experiência.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-900/50 rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-5xl">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}