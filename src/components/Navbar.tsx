import { ChartNoAxesGantt } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 border-[#c9c9c9] border-b bg-[repeating-linear-gradient(135deg,#c9c9c9_0px,#c9c9c9_2px,#ffffff_1px,#ffffff_10px)] z-50">
      <div className="border-[#c9c9c9] bg-white border-x lg:mx-48 md:mx-16 m-0 p-4 gap-4 flex items-center justify-between">
        <div className="font-logo text-3xl leading-[1.5rem]">
          <a href="/">
            DILJIT <br />
            SINGH
          </a>
        </div>

        <div className="hidden md:flex space-x-4 font-mono font-bold lg:gap-24 text-gray-500">
          <a href="/#about">[About]</a>
          <a href="/#projects">[Projects]</a>
          <a href="/blog">[Blog]</a>
        </div>

        <a
          href="https://cal.com/diljits"
          target="_blank"
          rel="noopener"
          className="hidden md:inline-block bg-primary text-white px-1 py-1 font-mono text-sm hover:bg-gray-800 transition rounded-md outline-2 outline-offset-1 outline-dashed outline-outline"
        >
          <div className="border-[#c9c9c9] bg-[repeating-linear-gradient(135deg,rgba(201,201,201,0.1)_0px,rgba(201,201,201,0.1)_2px,rgba(0,128,255,0.1)_1px,rgba(0,128,255,0.1)_5px)] z-50 rounded-md py-1 px-2">
            Contact
          </div>
        </a>

        <button
          type="button"
          className="md:hidden mx-2"
          onClick={() => setMenuOpen(true)}
        >
          <ChartNoAxesGantt />
        </button>
      </div>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 bg-black/40 transition-opacity duration-300 animate-fade-in"
          onClick={() => setMenuOpen(false)}
          onKeyUp={(e) => e.key === "Enter" && setMenuOpen(false)}
        />
      )}

      {/* Slide-in Right Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l border-gray-300 transform transition-transform duration-300 p-12 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-xl"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <div className="mt-20 flex flex-col space-y-6 text-center font-mono font-bold text-gray-700">
          <a href="/about" onClick={() => setMenuOpen(false)}>
            [About]
          </a>
          <a href="/projects" onClick={() => setMenuOpen(false)}>
            [Projects]
          </a>
          <a href="/blog" onClick={() => setMenuOpen(false)}>
            [Blog]
          </a>
          <a
            href="https://cal.com/diljits"
            target="_blank"
            rel="noopener"
            className=" bg-primary text-white px-1 py-1 font-mono text-sm hover:bg-gray-800 transition rounded-md outline-2 outline-offset-1 outline-dashed outline-outline"
          >
            <div className="border-[#c9c9c9] bg-[repeating-linear-gradient(135deg,rgba(201,201,201,0.1)_0px,rgba(201,201,201,0.1)_2px,rgba(0,128,255,0.1)_1px,rgba(0,128,255,0.1)_5px)] z-50 rounded-md py-1 px-2">
              Contact
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
