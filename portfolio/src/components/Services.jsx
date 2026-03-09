import reactIcon from "../assets/reactIcon.svg";
import laptopCodeIcon from "../assets/laptopCodeIcon.svg";
import nodeJsIcon from "../assets/nodeJsIcon.svg";
import dockerIcon from "../assets/dockerIcon.svg";
import databaseIcon from "../assets/databaseIcon.svg";
import gitHubIcon from "../assets/gitHubIcon.svg";

const Services = () => {
    return(
        <div name="services" className="bg-slate-950 py-10 px-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-center text-white font-semibold text-2xl sm:text-3xl">My Services</h1>
            <div className="grid grid-cols-1 gap-5 text-white my-5 py-3 px-3 sm:px-5 sm:grid-cols-2 md:px-8 lg:px-10 lg:grid-cols-3">
                <span className="flex flex-col justify-center cursor-pointer py-8 px-5 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all duration-500 ease-in-out">
                    <img src={reactIcon} alt="reactIcon" className="w-10 h-10"/>
                    <h1 className="font-semibold">Frontend Development</h1>
                    <h1 className="py-5 text-xs md:text-sm">Building modern responsive and interactive user interfaces using React, Redux, Context API, and Tailwind CSS.</h1>
                </span>
                <span className="flex flex-col justify-center cursor-pointer py-8 px-5 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all duration-500 ease-in-out">
                    <img src={nodeJsIcon} alt="nodeJsIcon" className="w-10 h-10"/>
                    <h1 className="font-semibold">Backend Development</h1>
                    <h1 className="py-5 text-xs md:text-sm">Building secure and scalable backend systems using Node.js, Express, REST APIs, and JWT-based authentication and authorization.</h1>
                </span>
                <span className="flex flex-col justify-center cursor-pointer py-8 px-5 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all duration-500 ease-in-out">
                    <img src={dockerIcon} alt="dockerIcon" className="w-10 h-10"/>
                    <h1 className="font-semibold">Containerization</h1>
                    <h1 className="py-5 text-xs md:text-sm">Containerizing applications using Docker to ensure consistent environments and efficient. scalable deployment.</h1>
                </span>
                <span className="flex flex-col justify-center cursor-pointer py-8 px-5 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all duration-500 ease-in-out">
                    <img src={databaseIcon} alt="databaseIcon" className="w-10 h-10"/>
                    <h1 className="font-semibold">Database Architecture</h1>
                    <h1 className="py-5 text-xs md:text-sm">Designing scalable database systems using MongoDB and Redis with optimized data modeling and high-performance caching.</h1>
                </span>
                <span className="flex flex-col justify-center cursor-pointer py-8 px-5 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all duration-500 ease-in-out">
                    <img src={gitHubIcon} alt="gitHubIcon" className="w-10 h-10"/>
                    <h1 className="font-semibold">Version Control</h1>
                    <h1 className="py-5 text-xs md:text-sm">Using Git and GitHub for efficient source code management, version tracking, and collaborative development.</h1>
                </span>
                <span className="flex flex-col justify-center cursor-pointer py-8 px-5 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all duration-500 ease-in-out">
                    <img src={laptopCodeIcon} alt="laptopCodeIcon" className="w-10 h-10"/>
                    <h1 className="font-semibold">Documentation</h1>
                    <h1 className="py-5 text-xs md:text-sm">Writing clear and structured documentation including READMEs, setup guides, and API references to improve project maintainability and collaboration.</h1>
                </span>
            </div>
        </div>
    )
}

export default Services;