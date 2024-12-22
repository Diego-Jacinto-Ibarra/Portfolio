import { useState, useEffect } from "react";

import PythonIcon from "./assets/python-icon.svg?react";
import DjangoIcon from "./assets/django-icon.svg?react";
import FlaskIcon from "./assets/flask-icon.svg?react";
import MysqlIcon from "./assets/mysql-icon.svg?react";
import PostgresIcon from "./assets/postgresql-icon.svg?react";
import DockerIcon from "./assets/docker-icon.svg?react";
import GithubIcon from "./assets/github-mark.svg?react";
import NginxIcon from "./assets/nginx-icon.svg?react";
import LinuxIcon from "./assets/linux-icon.svg?react";
import SpringIcon from "./assets/spring-icon.svg?react";
import JavaIcon from "./assets/java-icon.svg?react";

import { ProjectCard } from "./components/ProjectCard";

export default function App() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const projects = [
        {
            title: "Little Lemon",
            description:
                "Restaurant management website developed as part of the Meta Back-End Developer Professional Certificate.",
            image: "/littlelemon.png",
            technologies: ["Python", "Django", "PostgreSQL", "Nginx"],
            demoUrl: "https://diegojacinto.com/littlelemon/",
            githubUrl: "https://github.com/Diego-Jacinto-Ibarra/Little-Lemon",
        },
        // ... more projects
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="dark:bg-[#1a1a1a] bg-white min-h-screen">
            <header className="bg-gradient-to-r from-[#003f6b] to-[#005b8f]">
                <div className="container mx-auto px-4 py-16">
                    <nav className="flex justify-between items-center mb-16">
                        <div className="flex items-center space-x-2">
                            <CodeIcon className="h-8 w-8 text-white animate-pulse" />
                            <span className="text-white font-bold text-xl">
                                DJ
                            </span>
                        </div>

                        <div className="flex items-center space-x-6">
                            <a
                                href="https://github.com/Diego-Jacinto-Ibarra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                <GithubIcon className="w-10 h-10" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/diego-jacinto-9718372b3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                <svg
                                    className="w-7 h-7"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </nav>

                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Backend Developer
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Desarrollo soluciones robustas y escalables
                            utilizando tecnologías modernas como Django, Flask y
                            bases de datos SQL. Enfocado en crear aplicaciones
                            de alto rendimiento y fáciles de mantener.
                        </p>

                        <div className="flex justify-center space-x-4">
                            <a
                                href="#projects"
                                className="bg-white text-[#003f6b] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                            >
                                Ver Proyectos
                            </a>
                            <a
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                <span>Ver CV</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <article className="container mx-auto">
                    <section
                        aria-label="About Me"
                        className="bg-white dark:bg-[#1a1a1a] py-20 px-4 md:px-8"
                    >
                        <div className="container mx-auto">
                            <h2 className="text-[#005b8f] dark:text-white text-3xl font-bold mb-8 text-center">
                                Sobre mí
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-[#005b8f] dark:text-white text-2xl font-bold mb-4 text-center">
                                        Experiencia
                                    </h3>
                                    <div className="bg-[#005b8f] dark:bg-[#3d3d3d] text-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-2xl font-bold mb-4">
                                            Aplicación Web - Universidad de
                                            Guadalajara
                                        </h3>
                                        <p className="text-lg mb-2">
                                            <span className="font-semibold">
                                                Junio 2022 - Mayo 2024
                                            </span>
                                        </p>
                                        <p className="text-base mb-4">
                                            Desarrollé y diseñé un módulo web
                                            que mejoró la generación de
                                            documentos para la validación de
                                            créditos estudiantiles, lo que
                                            aumentó la eficiencia de la
                                            coordinación escolar y solucionó
                                            problemas de gestión documental en
                                            la Universidad de Guadalajara.
                                        </p>

                                        <div className="border-t border-white/20 pt-4 mt-4">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                                    Python
                                                </span>
                                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                                    Django
                                                </span>
                                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                                    PostgreSQL
                                                </span>
                                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                                    Docker
                                                </span>
                                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                                    Nginx
                                                </span>
                                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                                    Linux
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#005b8f] dark:text-white text-2xl font-bold mb-4 text-center">
                                        Habilidades
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-[#005b8f] dark:bg-[#3d3d3d] rounded-md p-4">
                                            <h4 className="text-white font-bold text-xl mb-2">
                                                Lenguajes y frameworks
                                            </h4>
                                            <div className="flex items-center space-x-4 flex-wrap justify-center gap-6">
                                                <div className="flex flex-col items-center">
                                                    <PythonIcon className="w-16 h-16 text-white skill-icon" />
                                                    <span className="text-white mt-2 font-medium">
                                                        Python
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <DjangoIcon className="w-16 h-16 text-white skill-icon" />
                                                    <span className="text-white mt-2 font-medium">
                                                        Django
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <FlaskIcon className="w-16 h-16 text-white skill-icon" />
                                                    <span className="text-white mt-2 font-medium">
                                                        Flask
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <SpringIcon className="w-16 h-16 text-white skill-icon" />
                                                    <span className="text-white mt-2 font-medium">
                                                        Spring
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <JavaIcon className="w-16 h-16 text-white skill-icon" />
                                                    <span className="text-white mt-2 font-medium">
                                                        Java
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#005b8f] dark:bg-[#3d3d3d] rounded-md p-4">
                                            <h4 className="text-white font-bold text-xl mb-2">
                                                Bases de datos
                                            </h4>
                                            <div className="flex items-center space-x-4 flex-wrap justify-center gap-6">
                                                <div className="flex flex-col items-center">
                                                    <MysqlIcon className="w-12 h-12 text-white skill-icon" />
                                                    <span className="text-white">
                                                        MySQL
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <PostgresIcon className="w-12 h-12 text-white skill-icon" />
                                                    <span className="text-white">
                                                        PostgreSQL
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#005b8f] dark:bg-[#3d3d3d] rounded-md p-4">
                                            <h4 className="text-white font-bold text-xl mb-2">
                                                Otros
                                            </h4>
                                            <div className="flex items-center space-x-4 flex-wrap justify-center gap-6">
                                                <div className="flex flex-col items-center">
                                                    <DockerIcon className="w-12 h-12 text-white skill-icon" />
                                                    <span className="text-white">
                                                        Docker
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <GithubIcon className="w-12 h-12 text-white skill-icon" />
                                                    <span className="text-white">
                                                        Git
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <NginxIcon className="w-12 h-12 text-white skill-icon" />
                                                    <span className="text-white">
                                                        Nginx
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <LinuxIcon className="w-12 h-12 text-white skill-icon" />
                                                    <span className="text-white">
                                                        Linux
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        aria-label="Projects"
                        className="bg-white dark:bg-[#1a1a1a] py-20 px-4 md:px-8"
                    >
                        <div className="container mx-auto">
                            <h2 className="text-[#005b8f] dark:text-white text-3xl font-bold mb-8 text-center">
                                Proyectos
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8"
                                id="projects"
                            >
                                {projects.map((project, index) => (
                                    <ProjectCard
                                        key={index}
                                        project={project}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </article>
            </main>

            {showScrollTop && (
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="fixed bottom-8 right-8 bg-[#005b8f] p-3 rounded-full shadow-lg hover:bg-[#003f6b] transition-colors z-50"
                    aria-label="Scroll to top"
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}

function CodeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}
