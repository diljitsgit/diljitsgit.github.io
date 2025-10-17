import { useEffect, useRef, useState } from "react";

function getRandomChar() {
  const chars = "/\\|-_"; // safer limited set
  return chars[Math.floor(Math.random() * chars.length)];
}

function normalizeAscii(text) {
  const lines = text.split("\n");
  const indents = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^(\s*)/)?.[1].length || 0);
  const minIndent = Math.min(...indents);
  return lines.map((line) => line.slice(minIndent)).join("\n");
}

export default function AsciiRotator({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(normalizeAscii(texts[0]));
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Detect mobile on first render
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Stop animation on mobile
  useEffect(() => {
    if (isMobile) return; // Disable animation below 768px

    const interval = setInterval(() => {
      const original = texts[currentIndex];
      const jumbleDuration = 400;
      const frameRate = 10;
      let frame = 0;

      const jumbleInterval = setInterval(() => {
        const scrambled = original
          .split("")
          .map((char) => {
            if (char === " " || char === "\n") return char;
            return Math.random() > 0.65 ? getRandomChar() : char;
          })
          .join("");

        setDisplayText(scrambled);
        frame++;
        if (frame >= frameRate) {
          clearInterval(jumbleInterval);
          const nextIndex = (currentIndex + 1) % texts.length;
          setCurrentIndex(nextIndex);
          setDisplayText(normalizeAscii(texts[nextIndex]));
        }
      }, jumbleDuration / frameRate);
    }, 1500 + 400);

    return () => clearInterval(interval);
  }, [currentIndex, texts, isMobile]);

  return (
    <div
      ref={containerRef}
      className="text-center mx-auto max-h-40 h-40 min-h-40 overflow-hidden flex items-center justify-center pr-8"
    >
      <pre className="text-[9px] sm:text-[10px] md:text-xs max-h-40 h-40 min-h-40 leading-tight font-mono font-medium whitespace-pre-wrap break-all">
        {displayText}
      </pre>
    </div>
  );
}
