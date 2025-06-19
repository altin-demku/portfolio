import React from "react";

interface WaveProps {
    title: string;
    id: string;
}

const Waveline: React.FC<WaveProps> = ({ title, id }) => {
    return (
        <div
            className="row-start-3 flex flex-col items-center justify-center gap-6 mt-[200px]"
            id={id}
        >
            <div className="relative w-full">
                <svg
                    viewBox="0 0 1440 500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-[300px]"
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff9966" />
                            <stop offset="100%" stopColor="#ffcc66" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#waveGradient)"
                        d="
                            M0,80
                            C360,0 1080,160 1440,80
                            L1440,420
                            C1080,500 360,340 0,420
                            Z
                        "
                    />
                </svg>

                {/* Textinhalt über der SVG */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#FFF8E7] text-[55px] font-bold text-center px-4">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Waveline;
