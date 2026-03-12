import quickChat from "../assets/quickChat.png";
import studentErp from "../assets/studentErp.png";
import edusity from "../assets/edusity.png";
import todoApp from "../assets/todoApp.png";
import mernAuth from "../assets/mernAuth.png";

const Projects = () => {
    return(
        <div name="projects" className="bg-linear-to-r from-blue-950 to-black px-8 py-10 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-white text-center text-2xl font-semibold sm:text-3xl">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 sm:mx-18 md:mx-10 lg:mx-15 xl:mx-20">
                <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 cursor-pointer shadow-2xl rounded-2xl hover:bg-slate-900 transition-all duration-500 ease-in-out">
                    <img src={studentErp} alt="studentErpImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                    <h1 className="text-white">Student ERP</h1>
                </span>
                <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 cursor-pointer shadow-2xl rounded-2xl hover:bg-slate-900 transition-all duration-500 ease-in-out">
                    <img src={quickChat} alt="quickChatImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                    <h1 className="text-white">Quick Chat</h1>
                </span>
                <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 cursor-pointer shadow-2xl rounded-2xl hover:bg-slate-900 transition-all duration-500 ease-in-out">
                    <img src={mernAuth} alt="mernAuth" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                    <h1 className="text-white">MERN Authentication</h1>
                </span>
                <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 cursor-pointer shadow-2xl rounded-2xl hover:bg-slate-900 transition-all duration-500 ease-in-out">
                    <img src={edusity} alt="edusityImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                    <h1 className="text-white">Edusity</h1>
                </span>
                <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 cursor-pointer shadow-2xl rounded-2xl hover:bg-slate-900 transition-all duration-500 ease-in-out">
                    <img src={todoApp} alt="todoImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                    <h1 className="text-white">Todo App with Authentication</h1>
                </span>
                <span className="flex flex-col justify-center items-center gap-3 py-5 bg-slate-950 cursor-pointer shadow-2xl rounded-2xl hover:bg-slate-900 transition-all duration-500 ease-in-out">
                    <img src={quickChat} alt="quickChatImage" className="px-3 sm:px-0 sm:w-80 sm:h-40 md:w-65 md:h-33 lg:w-90 lg:h-45 xl:w-100 xl:h-50"/>
                    <h1 className="text-white">Quick Chat</h1>
                </span>
            </div>
        </div>
    )
}

export default Projects;