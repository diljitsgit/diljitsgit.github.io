import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <nav className="bottom-0 border-[#c9c9c9] border-y bg-[repeating-linear-gradient(135deg,#c9c9c9_0px,#c9c9c9_2px,#ffffff_1px,#ffffff_10px)] z-50">
      <div className="border-[#c9c9c9] bg-white border-x lg:mx-48 md:mx-16 m-0 p-4 gap-4 flex items-center justify-between">
        <div className="flex flex-col space-x-4 font-mono font-bold gap-2 text-gray-500">
          <a href="/about">[About]</a>
          <a href="/projects">[Projects]</a>
          <a href="/blog">[Blog]</a>
          <a href="/blog">[Contact]</a>
        </div>

        <div className="font-logo text-lg leading-[1.5rem]">
          <a href="/">Made by Diljit Singh</a>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            aria-label="GitHub"
            target="_blank"
            rel="noopener"
          >
            <Github size={24} className="hover:opacity-70 transition" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            aria-label="Twitter"
            target="_blank"
            rel="noopener"
          >
            <Twitter size={24} className="hover:opacity-70 transition" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener"
          >
            <Linkedin size={24} className="hover:opacity-70 transition" />
          </a>
        </div>
      </div>
    </nav>
  );
}
