"use client";
import { ProjectCard } from "./ProjectCard";

const projectsData = [
  {
    title: "Fortinate Shopp",
    description: "Porjeto fortnite shopp desenvolvido com APi e Prisma com Neon.",
    imageUrl: "/project1.jpg", // Coloque a imagem em /public/project1.jpg
    tags: ["Prisma","Neon", "Next.js", "Tailwind CSS","Typescript"],
    githubUrl: "https://github.com/LEBEATO/fortinate-shopp.git",
    liveUrl: "https://fortinate-shopp.vercel.app",
  },
  {
    title: "Projeto Exemplo 2",
    description: "Uma breve descrição do que este projeto faz, os desafios e as tecnologias usadas.",
    imageUrl: "/project2.jpg", // Coloque a imagem em /public/project2.jpg
    tags: ["TypeScript", "Node.js", "Express"],
    githubUrl: "https://github.com/seu-usuario/projeto-2",
  },
   {
    title: "Projeto Exemplo 3",
    description: "Uma breve descrição do que este projeto faz, os desafios e as tecnologias usadas.",
    imageUrl: "/project2.jpg", // Coloque a imagem em /public/project2.jpg
    tags: ["TypeScript", "Node.js", "Express"],
    githubUrl: "https://github.com/seu-usuario/projeto-2",
  },
  // Adicione mais projetos aqui
];

export function Projects() {
  return (
    <section
      id="projetos"
      className="bg-gray-950 text-white py-20 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4">
          Meus Projetos
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Aqui estão alguns dos projetos em que trabalhei recentemente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}