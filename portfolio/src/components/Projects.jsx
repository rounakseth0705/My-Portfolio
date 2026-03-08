import quickChat from "../assets/quickChat.png";
import studentErp from "../assets/studentErp.png";

const Projects = () => {
    return(
        <div name="projects" className="bg-linear-to-r from-blue-950 to-black px-8 py-10 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-white text-center text-2xl font-semibold sm:text-3xl">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-10">
                <span className="flex flex-col justify-center items-center gap-2 py-5 bg-slate-950 cursor-pointer shadow-2xl rounded">
                    <img src={studentErp} alt="studentErpImage" className="w-130 h-70"/>
                    <h1 className="text-white">Student ERP</h1>
                </span>
                <span className="flex flex-col justify-center items-center gap-2 bg-slate-950 cursor-pointer shadow-2xl rounded">
                    <img src={quickChat} alt="quickChatImage" className="w-130 h-70"/>
                    <h1 className="text-white text-center">Quick Chat</h1>
                </span>
                <span className="flex flex-col justify-center items-center gap-2 bg-slate-950 cursor-pointer shadow-2xl rounded">
                    <img />
                    <h1 className="text-white text-center">Educity</h1>
                </span>
                <span className="flex flex-col justify-center items-center gap-2 bg-slate-950 cursor-pointer shadow-2xl rounded">
                    <img />
                    <h1 className="text-white text-center">Todo App</h1>
                </span>
            </div>
        </div>
    )
}

export default Projects;