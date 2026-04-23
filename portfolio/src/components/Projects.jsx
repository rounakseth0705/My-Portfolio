import quickChat from "../assets/quickChat.png";
import studentErp from "../assets/studentErp.png";
import edusity from "../assets/edusity.png";
import todoApp from "../assets/todoApp.png";
import itSolutions from "../assets/itSolutions.png";
import passportApplication from "../assets/passportApplication.png";

const Projects = () => {
    return(
        <div name="projects" className="bg-linear-to-r from-blue-950 to-slate-950 px-8 py-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-purple-500 text-center font-semibold text-5xl">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 sm:mx-18 md:mx-10 lg:mx-15 xl:mx-20">
                <a href="https://github.com/rounakseth0705/Student-ERP" target="_main">
                    <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 border border-white cursor-pointer shadow-2xl rounded-2xl hover:shadow-lg hover:shadow-purple-600 hover:border-purple-500 hover:scale-103 transition-all duration-800 ease-in-out">
                        <img src={studentErp} alt="studentErpImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                        <h1 className="text-white">Student ERP</h1>
                    </span>
                </a>
                <a href="https://github.com/rounakseth0705/Quick-Chat" target="_main">
                    <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 border border-white cursor-pointer shadow-2xl rounded-2xl hover:shadow-lg hover:shadow-purple-600 hover:border-purple-500 hover:scale-103 transition-all duration-800 ease-in-out">
                        <img src={quickChat} alt="quickChatImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>              
                        <h1 className="text-white">Quick Chat</h1>
                    </span>
                </a>
                <a href="https://github.com/rounakseth0705/Passport-Application" target="_main">
                    <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 border border-white cursor-pointer shadow-2xl rounded-2xl hover:shadow-lg hover:shadow-purple-600 hover:border-purple-500 hover:scale-103 transition-all duration-800 ease-in-out">
                        <img src={passportApplication} alt="passportApplication" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                        <h1 className="text-white">Passport Application</h1>
                    </span>
                </a>
                <a href="https://github.com/rounakseth0705/edusity" target="_main">
                    <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 border border-white cursor-pointer shadow-2xl rounded-2xl hover:shadow-lg hover:shadow-purple-600 hover:border-purple-500 hover:scale-103 transition-all duration-800 ease-in-out">
                        <img src={edusity} alt="edusityImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                        <h1 className="text-white">Edusity</h1>
                    </span>
                </a>
                <a href="https://github.com/rounakseth0705/Todo-App" target="_main">
                    <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 border border-white cursor-pointer shadow-2xl rounded-2xl hover:shadow-lg hover:shadow-purple-600 hover:border-purple-500 hover:scale-103 transition-all duration-800 ease-in-out">
                        <img src={todoApp} alt="todoImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                        <h1 className="text-white">Task Adder with Authentication</h1>
                    </span>
                </a>
                <a href="" target="_main">
                    <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 border border-white cursor-pointer shadow-2xl rounded-2xl hover:shadow-lg hover:shadow-purple-600 hover:border-purple-500 hover:scale-103 transition-all duration-800 ease-in-out">
                        <img src={itSolutions} alt="itSolutionsImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                        <h1 className="text-white">IT Solutions (React.js)</h1>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Projects;