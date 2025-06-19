import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
            <div
                className="
          bg-[rgba(255,165,0,0.15)]  /* leicht orangy */
          backdrop-blur-md
          px-10 py-4
          rounded-3xl
          flex flex-wrap justify-center items-center gap-10
          max-w-[90vw]
          shadow-md
        "
            >
                <a
                    href="#1"
                    className="
            text-lg sm:text-xl
            text-white
            hover:text-yellow-300
            transition-colors duration-300
            font-semibold
          "
                >
                    HOME
                </a>
                <a
                    href="#About"
                    className="
            text-lg sm:text-xl
            text-white
            hover:text-yellow-300
            transition-colors duration-300
            font-semibold
          "
                >
                    ABOUT
                </a>
                <a
                    href="#Projects"
                    className="
            text-lg sm:text-xl
            text-white
            hover:text-yellow-300
            transition-colors duration-300
            font-semibold
          "
                >
                    PROJECTS
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
