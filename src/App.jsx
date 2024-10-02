import PythonIcon from "./assets/python-icon.svg?react";
import DjangoIcon from "./assets/django-icon.svg?react";
import FlaskIcon from "./assets/flask-icon.svg?react";
import MysqlIcon from "./assets/mysql-icon.svg?react";
import PostgresIcon from "./assets/postgresql-icon.svg?react";
import Docker from "./assets/docker-icon.svg?react";

export default function Component() {
    return (
        <div className="dark:bg-[#1a1a1a] bg-white min-h-screen">
            <header className="bg-[#005b8f] py-6 px-4 md:px-8 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <CodeIcon className="h-8 w-8 text-white" />
                        <h1 className="text-white font-bold text-2xl ml-2">
                            Diego Jacinto - Backend Developer
                        </h1>
                    </div>
                </div>
            </header>
            <main>
            <section className="bg-[#005b8f] py-20 px-4 md:px-8">
    <div className="container mx-auto grid grid-cols-1 gap-8 items-center">
        <div className="text-center">
            <p className="text-[#d0d0d0] text-xl mb-6">
            Hola, soy Diego Jacinto, desarrollador backend con experiencia en optimización de flujos de trabajo y creación de aplicaciones robustas y escalables.
            </p>
            <div className="space-y-4">
                <div className="flex justify-center items-center">
                    <svg
                        className="w-6 h-6 text-white mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 4.99-8-4.99V6h16zM4 18V8.489l7.386 4.615a1 1 0 0 0 1.228 0L20 8.489V18H4z"
                        />
                    </svg>
                    <a
                        href="mailto:diego.jacinto.ibarra@gmail.com"
                        className="text-white font-bold"
                    >
                        diego.jacinto.ibarra@gmail.com
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <svg
                        className="w-6 h-6 text-white mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.028-3.152-1.92-3.152-1.92 0-2.215 1.5-2.215 3.048v5.604h-3v-10h2.88v1.367h.041c.401-.76 1.379-1.56 2.84-1.56 3.037 0 3.6 2 3.6 4.6v5.593z" />
                    </svg>
                    <a
                        href="https://www.linkedin.com/in/diego-jacinto-9718372b3/"
                        className="text-white font-bold hover:underline"
                    >
                        Mi LinkedIn
                    </a>
                </div>
                <div className="flex justify-center">
                    <a
                        href="/CV.pdf"
                        target="_blank"
                        className="bg-[white] text-black hover:bg-[#d0d0d0] hover:text-[#005b8f] transition-colors px-4 py-2 rounded-md font-bold"
                    >
                        Ver CV
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
                <section className="bg-white dark:bg-[#1a1a1a] py-20 px-4 md:px-8">
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
                                        Desarrollé y diseñé un módulo web que
                                        mejoró la generación de documentos para
                                        la validación de créditos estudiantiles,
                                        lo que aumentó la eficiencia de la
                                        coordinación escolar y solucionó
                                        problemas de gestión documental en la
                                        Universidad de Guadalajara.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#005b8f] dark:text-white text-2xl font-bold mb-4 text-center">
                                    Habilidades
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-[#005b8f] dark:bg-[#3d3d3d] rounded-md p-4">
                                        <h4 className="text-white font-bold text-xl mb-2">
                                            Backend
                                        </h4>
                                        <div className="flex items-center space-x-4">
                                            <PythonIcon className="w-12 h-12 text-white" />
                                            <span className="text-white">
                                                Python
                                            </span>
                                            <DjangoIcon className="w-12 h-12 text-white" />
                                            <span className="text-white">
                                                Django
                                            </span>
                                            <FlaskIcon className="w-12 h-12 text-white" />
                                            <span className="text-white">
                                                Flask
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-[#005b8f] dark:bg-[#3d3d3d] rounded-md p-4">
                                        <h4 className="text-white font-bold text-xl mb-2">
                                            Bases de datos
                                        </h4>
                                        <div className="flex items-center space-x-4">
                                            <MysqlIcon className="w-12 h-12 text-white" />
                                            <span className="text-white">
                                                MySQL
                                            </span>
                                            <PostgresIcon className="w-12 h-12 text-white" />
                                            <span className="text-white">
                                                PostgreSQL
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-[#005b8f] dark:bg-[#3d3d3d] rounded-md p-4">
                                        <h4 className="text-white font-bold text-xl mb-2">
                                            Otros
                                        </h4>
                                        <div className="flex items-center space-x-4">
                                            <Docker className="w-12 h-12 text-white" />
                                            <span className="text-white">
                                                Docker
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white dark:bg-[#1a1a1a] py-20 px-4 md:px-8">
                    <div className="container mx-auto">
                        <h2 className="text-[#005b8f] dark:text-white text-3xl font-bold mb-8 text-center">
                            Proyectos
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="max-w-lg mx-auto">
                                <div className="w-full h-64 bg-gray-200 rounded-t-md overflow-hidden">
                                    <img
                                        src="/cat.jpeg"
                                        alt="Proyecto 1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 bg-[#005b8f] dark:bg-[#3d3d3d]">
                                    <h3 className="text-white text-xl font-bold mb-2">
                                        Módulo para las coordinaciones de
                                        carrera que ayudan a la validación de
                                        las constancias para la formación
                                        integral
                                    </h3>
                                    <p className="text-[#d0d0d0] mb-4">
                                        Descripción del proyecto 1
                                    </p>
                                    <a
                                        href="#"
                                        className="text-[#d0d0d0] hover:text-white transition-colors"
                                    >
                                        Ver más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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
