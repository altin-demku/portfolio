import React from "react";

const techImages = [
    { src: "/python_image.png", alt: "Python", maxHeight: "max-h-[225px]", rounded: false },
    { src: "/java_image.png", alt: "Java", maxHeight: "max-h-[225px]", rounded: false },
    { src: "/js_image.png", alt: "JavaScript", maxHeight: "max-h-[200px]", rounded: true, roundedClass: "rounded-3xl" },
    { src: "/mongodb_image.png", alt: "MongoDB", maxHeight: "max-h-[225px]", rounded: false },
    { src: "/bash_image.png", alt: "Bash", maxHeight: "max-h-[225px]", rounded: false },
    { src: "/mysql_image.png", alt: "MySQL", maxHeight: "max-h-[225px]", rounded: false },
    { src: "/nextjs_image.png", alt: "Next.js", maxHeight: "max-h-[200px]", rounded: true, roundedClass: "rounded-2xl" },
    { src: "/react_image.png", alt: "React", maxHeight: "max-h-[225px]", rounded: false },
];

const animationStyle = `
@keyframes marquee-left {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
@keyframes marquee-right {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
}
.animate-marquee-left {
  animation: marquee-left 30s linear infinite;
}
.animate-marquee-right {
  animation: marquee-right 30s linear infinite;
}
`;

// Fisher-Yates Shuffle
function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const TechStack: React.FC = () => {
    // zweite Reihe: zufällig gemischt
    const shuffledImages = shuffleArray(techImages);

    // Jede Reihe wird doppelt gesetzt, damit sie nahtlos läuft
    const firstRow = [...techImages, ...techImages];
    const secondRow = [...shuffledImages, ...shuffledImages];

    return (
        <>
            <style>{animationStyle}</style>
            <section className="overflow-hidden w-full py-8 space-y-8">
                {/* Erste Reihe: original Reihenfolge, läuft von rechts nach links */}
                <div className="whitespace-nowrap flex gap-8 animate-marquee-left">
                    {firstRow.map(({ src, alt, maxHeight, rounded, roundedClass }, index) => (
                        <img
                            key={`row1-${index}`}
                            src={src}
                            alt={alt}
                            className={`${maxHeight} ${rounded ? `rounded ${roundedClass}` : ""} inline-block hover:scale-105 transition-transform duration-500`}
                        />
                    ))}
                </div>

                {/* Zweite Reihe: gemischte Reihenfolge, läuft von links nach rechts */}
                <div className="whitespace-nowrap flex gap-8 animate-marquee-right">
                    {secondRow.map(({ src, alt, maxHeight, rounded, roundedClass }, index) => (
                        <img
                            key={`row2-${index}`}
                            src={src}
                            alt={alt}
                            className={`${maxHeight} ${rounded ? `rounded ${roundedClass}` : ""} inline-block hover:scale-105 transition-transform duration-500`}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default TechStack;
