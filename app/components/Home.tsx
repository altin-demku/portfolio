import React from "react";
import TypingName from "@/app/components/TypingName";

const HomeStart: React.FC = () => {
    return (
        <section
            className="border border-[#D4F0FF] w-full min-h-[700px] shadow-[0_10px_20px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-center px-4"
            id="1"
            style={{background: "linear-gradient(to bottom, #ff9966 0%, #ffcc66 100%)"}}
        >

            <div className="flex flex-wrap justify-center items-center w-full max-w-[1200px]">
                <div>
                    <TypingName/>
                    <div className="flex items-center gap-2 mt-2">
                        <img src="/email-image.png" alt="E-Mail" className="w-[40px] h-[30px] rounded-full"/>
                        <span>altin-demko@hotmail.de</span>
                    </div>
                    <section className="flex flex-wrap items-center justify-center mb-[10px]" id="4">
                        <a href="https://www.linkedin.com/feed/">
                            <img src="/linkediin-image.png" alt="linkedin"
                                 className="w-[75px] h-[75px] rounded-[30px]"/>
                        </a>
                        <a href="https://github.com/altin-demku">
                            <img src="/github-image.png" alt="github"
                                 className="w-[50px] h-[50px] rounded-[30px]"/>
                        </a>
                    </section>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8">
                    <img src="/title_image.jpg" alt="Profile" className="w-[300px] h-[365px] rounded-[30px]"/>
                </div>
            </div>
        </section>
    );
};

export default HomeStart;
