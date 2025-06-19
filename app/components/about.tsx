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
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
            </div>
        </section>
    );
};

export default About;
