import React from "react";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link }) => {
    return (
        <div className="rounded-2xl shadow-lg w-[350px] h-[450px] m-5 overflow-hidden flex flex-col bg-white/70 backdrop-blur-md transition-shadow hover:shadow-orange-300">
            <div className="h-[225px] w-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 bg-gradient-to-b from-[#ffb066] to-[#ffe0a1] w-full p-[30px] flex flex-col justify-between">
                <div>
                    <h3 className="font-bold text-2xl text-[#5C4033]">{title}</h3>
                    <p className="text-[17px] text-[#5C4033] mt-4">{description}</p>
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-4 py-2 border-2 border-[#5C4033] text-[#5C4033] font-medium inline-block hover:bg-[#ff9966] hover:text-white transition-all rounded-md"
                >
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
