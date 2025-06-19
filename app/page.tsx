import ProjectCard from "./components/projectcard";
import Wave from "./components/Wave";
import Navbar from "./components/Navbar";
import About from "./components/about";
import TechStack from "./components/TechStack";
import HomeStart from "./components/Home";
import Waveline from "./components/Wavelines";

export default function Home() {
    return (
        <div>
            <header className="w-full">
                <Navbar></Navbar>
            </header>
            <main>
                <HomeStart></HomeStart>

                <Waveline title="About" id="About"></Waveline>
                <About></About>

                <Waveline title="Projects" id="Projects"></Waveline>
                <section className="flex flex-wrap items-center justify-center mb-[100px]" id="3">
                    <ProjectCard
                        image="/FlaskMySQL_picture.jpg"
                        title="FlaskMySQL"
                        description="Flask-Programm mit MySQL zur Verwaltung und Speicherung von Daten."
                        link="https://github.com/altin-demku/FlaskMySQL"
                    />
                    <ProjectCard
                        image="/AutoMailGPT_picture.jpg"
                        title="AutoMailGPT"
                        description="Ein Programm, das E-Mails zusammenfasst und in ein Word-Dokument speichert."
                        link="https://github.com/altin-demku/AutoMailGPT-"
                    />
                </section>
                <TechStack/>



            </main>
        </div>
    );
}
