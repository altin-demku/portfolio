export default function Home() {
    return (
        <div>
            <header className="w-full">
                <nav className="flex justify-center">
                    <div
                        className="fixed top-5 z-[100] bg-[rgba(173,216,230,0.5)] backdrop-blur-md px-8 py-4 rounded-2xl flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 max-w-[90vw]"
                    >
                        <a href="#1" className="hover:text-white text-lg sm:text-xl">HOME</a>
                        <a href="#2" className="hover:text-white text-lg sm:text-xl">ABOUT</a>
                        <a href="#3" className="hover:text-white text-lg sm:text-xl">PROJECTS</a>
                        <a href="#4" className="hover:text-white text-lg sm:text-xl">CONTACT</a>
                    </div>
                </nav>
            </header>
            <main>
                <section
                    className="border border-[#D4F0FF] w-full min-h-[700px] bg-[#D4F0FF] shadow-[0_10px_20px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-center px-4"
                    id="1"
                >
                    <div className="flex flex-wrap justify-center items-center w-full max-w-[1200px]">

                        <div className="text-4xl md:text-5xl font-bold text-center md:text-left w-full md:w-auto">
                            ALTIN DEMKU
                        </div>

                        <div className="mt-4 md:mt-0 md:ml-8">
                            <img src="/title_image.jpg" alt="hi" className="w-[300px] h-[365px] rounded-[30]"/>
                        </div>
                    </div>
                </section>
                <div className="w-full h-[300px] bg-[#D4F0FF] mask-bg-wave mt-[200px]"/>


                <div className="flex justify-center mt-[140px] mb-[30px]">
                    <div className="font-bold text-[#A1C9FF] text-[34px]">About</div>
                </div>
                <section className="flex justify-center mb-[140px] px-4" id="2">
                    <div
                        className="border border-[#D4F0FF] w-full max-w-screen-lg bg-[#D4F0FF] shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-6 sm:p-8 md:p-10">
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
                <div className="w-full h-[300px] bg-[#D4F0FF] mask-bg-wave"/>


                <div className="flex justify-center mt-[140px] mb-[30px]">
                    <div className="font-bold text-[#A1C9FF] text-[34px]">Projects</div>
                </div>
                <section className="flex flex-wrap items-center justify-center mb-[100px]" id="3">
                    <div className="rounded-xl shadow-2xl w-[350px] h-[450px] m-[20px] overflow-hidden">
                        <img src="/FlaskMySQL_picture.jpg" alt="FlaskMySQL " className="h-[225px] w-full"></img>
                        <div className="h-[225px] bg-amber-50 w-full break-words">
                            <div className="font-bold text-2xl text-gray-700 pt-[30px] pl-[30px] pr-[30px]">FlaskMySQL
                            </div>
                            <div className=" text-xl text-gray-700 pl-[30px] pt-[15px] pb-[10px]">
                                Flask-Programm mit MySQL zur Verwaltung und Speicherung von Daten.
                            </div>
                            <a href="https://github.com/altin-demku/FlaskMySQL" target="_blank"
                               className="border border-black border-2 p-1 ml-[30px] mt-2 hover:border-[#D4F0FF] hover:text-[#D4F0FF] ">Learn
                                more.</a>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-2xl w-[350px] h-[450px] m-[20px] overflow-hidden">
                        <img src="/AutoMailGPT_picture.jpg" alt="AutoMailGPT" className="h-[225px] w-full"></img>
                        <div className="h-[225px] bg-amber-50 w-full break-words">
                            <div className="font-bold text-2xl text-gray-700 pt-[30px] pl-[30px] pr-[30px]">AutoMailGPT
                            </div>
                            <div className=" text-xl text-gray-700 pl-[30px] pt-[15px] pb-[10px]">
                                Ein Programm, das E-Mails zusammenfasst und in ein Word-Dokument speichert.
                            </div>
                            <a href="https://github.com/altin-demku/AutoMailGPT-" target="_blank"
                               className="border border-black border-2 p-1 ml-[30px] mt-2 hover:border-[#D4F0FF] hover:text-[#D4F0FF] ">Learn
                                more.</a>
                        </div>
                    </div>

                </section>

                <section className="flex flex-wrap items-center justify-center">
                    <img src="/python_image.png" alt="python" className="max-h-[225px] hover:rotate-10 transition-transform duration-1000"/>
                    <img src="/java_image.png" alt="python" className="max-h-[225px] hover:rotate-10 transition-transform duration-1000"/>
                    <img src="/js_image.png" alt="python" className="max-h-[200px] rounded rounded-3xl hover:rotate-10 transition-transform duration-1000"/>
                    <img src="/mongodb_image.png" alt="python" className="max-h-[225px] hover:rotate-10 transition-transform duration-1000"/>
                    <img src="/bash_image.png" alt="python" className="max-h-[225px] hover:rotate-10 transition-transform duration-1000"/>
                    <img src="/mysql_image.png" alt="python" className="max-h-[225px] hover:rotate-10 transition-transform duration-1000"/>
                    <img src="/nextjs_image.png" alt="python" className="max-h-[200px] rounded rounded-2xl hover:rotate-10 transition-transform duration-1000"/>
                    <img src="/react_image.png" alt="python" className="max-h-[225px] hover:rotate-10 transition-transform duration-1000"/>
                </section>

            </main>
            <footer className="row-start-3 flex flex-col items-center justify-center gap-6">
                <div className="w-full bg-[#D4F0FF] mask-wave min-h-[250px] overflow-hidden">
                </div>
            </footer>

        </div>
    );
}
