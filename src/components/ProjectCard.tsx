import { useState } from "react";

interface Props {
  title: string;
  description: string;
  image?: string;
  link?: string;
  technologies?: string[];
}

const techColors: Record<string, string> = {
  astro: "[#e43ba2]",
  mdx: "purple-500",
  react: "blue-500",
  tailwind: "cyan-500",
  blender: "orange-700",
  supabase: "green-600",
};

export default function ProjectCard({
  title,
  description,
  image,
  link = "#",
  technologies = [],
}: Props) {
  const placeholder = "https://placehold.co/400x300";
  const [isLoading, setIsLoading] = useState(true);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-[1px] border-darkOutline rounded-md overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
    >
      <div className="relative w-full h-48">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        )}
        <img
          src={image || placeholder}
          alt={title}
          className={`w-full h-48 object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="p-4 font-mono">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm mt-1">{description}</p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`text-white text-xs font-monoHero px-2 py-1 rounded-full flex items-center gap-1 bg-${
                  techColors[tech.toLowerCase()] || "bg-gray-500"
                } transition-transform hover:scale-105`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
