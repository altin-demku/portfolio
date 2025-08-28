import React from "react";

const About: React.FC = () => {
    return (
        <section className="flex justify-center mb-[140px] px-4" id="2">
            <div
                className="border border-[#D4F0FF] w-full max-w-screen-lg shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-6 sm:p-8 md:p-10"
                style={{background: "linear-gradient(to bottom, #ff9966 0%, #ffcc66 100%)"}}
            >
                <img
                    src="/about_image.jpg"
                    alt="about_image"
                    className="w-full max-w-[300px] md:max-w-[350px] h-auto object-contain"
                />

                <div
                    className="text-center md:text-left text-sm sm:text-base md:text-lg leading-relaxed break-words">
                    Hi, I’m Altin, living in beautiful Switzerland. I’m passionate about staying active.
                    whether that’s training in the gym or enjoying some summer fishing. When I’m not outdoors, 
                    you’ll probably find me watching movies (I’m a total film fan!) or firing up the grill to 
                    cook something delicious. I love combining my curiosity, creativity, and enthusiasm in 
                    everything I do, both in life and in my work.
                </div>
            </div>
        </section>
    );
};

export default About;
