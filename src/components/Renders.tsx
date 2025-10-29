import { useState} from "react";

interface RendersProps {
    images: string[];
}

export default function RenderImages({ images }: RendersProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    const handleClose = (e) => {
        if (e) e.stopPropagation();
        setSelectedIndex(null);
    };

    const handleKeyDown = (e) => {
        if (selectedIndex === null) return;

        if (e.key === "Escape") setSelectedIndex(null);
        else if (e.key === "ArrowRight")
            setSelectedIndex((prev) =>
                prev === null ? 0 : (prev + 1) % images.length
            );
        else if (e.key === "ArrowLeft")
            setSelectedIndex((prev) =>
                prev === null ? 0 : (prev - 1 + images.length) % images.length
            );
    };

    return (
        <section id="renders" className=" scroll-m-20">
            <div
                className="border-[#c9c9c9] border-x 
                lg:mx-48 md:mx-16 m-0 gap-4 flex flex-col items-center justify-between 
                md:py-12 py-6 lg:px-32 md:px-12 px-4
                bg-[linear-gradient(to_right,rgba(69,69,69,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(69,69,69,0.2)_1px,transparent_1px)] 
                bg-[length:24px_24px]"
            >
                <h2 className="text-5xl font-monoHero font-bold text-black mb-8 text-center">
                    3D Renders.
                </h2>

                <div
                    className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 w-full max-w-7xl [column-fill:_balance]"
                >
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-[#2a2a2a] shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group cursor-pointer"
                            onClick={() => handleClick(i)}
                        >
                            <img
                                src={src}
                                alt={`Render ${i + 1}`}
                                loading="lazy"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/40 flex items-center justify-center text-white font-mono text-sm"
                            >
                                Click to view
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={handleClose}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClose();
                        }}
                        className="absolute top-6 right-8 text-white text-3xl font-bold hover:scale-110 transition"
                        aria-label="Close lightbox"
                    >
                        &times;
                    </button>

                    {/* Left Arrow */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(
                                (selectedIndex - 1 + images.length) % images.length
                            );
                        }}
                        className="absolute left-6 text-white text-4xl font-bold hover:scale-110 transition select-none"
                        aria-label="Previous image"
                    >
                        &#10094;
                    </button>

                    {/* Image */}
                    <img
                        src={images[selectedIndex]}
                        alt={`Render ${selectedIndex + 1}`}
                        className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Right Arrow */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex((selectedIndex + 1) % images.length);
                        }}
                        className="absolute right-6 text-white text-4xl font-bold hover:scale-110 transition select-none"
                        aria-label="Next image"
                    >
                        &#10095;
                    </button>
                </div>
            )}
        </section>
    );
}
