import { useState } from "react";

interface Props {
    title: string;
    description: string;
    image?: string;
    link?: string;
    technologies?: string[];
}

const techColors: Record<string, string> = {
    astro: "bg-[#e43ba2]/50",
    mdx: "bg-yellow-500/50",
    react: "bg-blue-500/50",
    tailwind: "bg-cyan-500/50",
    blender: "bg-orange-400/50",
    supabase: "bg-green-600/50",
    html: "bg-orange-500/50",
    css: "bg-blue-500/50",
    js: "bg-yellow-400/50",
    api: "bg-purple-500/50",
    photoshop: "bg-blue-700/50",
};

export default function ProjectCard({
    title,
    description,
    image,
    link = "#",
    technologies = [],
}: Props) {

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-[1px] border-darkOutline rounded-md overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
        >
            <div className="relative w-full h-48">
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-48 object-cover transition-opacity duration-300 opacity-100`}
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
                                className={`text-white text-xs font-monoHero px-2 py-1 rounded-full flex items-center gap-1 ${
                                    techColors[tech.toLowerCase()] ||
                                    "bg-gray-500"
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
