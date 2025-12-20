import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group bg-gray-950 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={imageUrl}
        alt={`Imagem do projeto ${title}`}
        width={400}
        height={250}
        className=" w-full h-[330px] sm:h-[220px] md:h-[330px] object-cover"
      
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white transition-colors group-hover:text-cyan-400">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-6">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
            <FaGithub size={20} /> Código
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <FaExternalLinkAlt size={18} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}