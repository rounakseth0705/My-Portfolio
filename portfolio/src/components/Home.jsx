import { useState } from "react";
import { Link } from "react-scroll";
import menuIcon from "../assets/menuIcon.svg";
import crossIcon from "../assets/crossIcon.svg";
import codeIcon from "../assets/codeIcon.svg";
import myPhoto from "../assets/photo.jpeg";
import fileDownloadIcon from "../assets/fileDownloadIcon.svg";
import gitHubIcon from "../assets/gitHubIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";

const Home = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    return(
        <div name="home" className="bg-linear-to-r from-blue-950 to-slate-950 h-screen">
            <div className="flex justify-between items-center py-8 text-white px-8 md:py-12 md:px-15 lg:px-12 xl:px-20">
                <img src={codeIcon} alt="codeIcon" className="w-8 h-8"/>
                <span className="hidden text-sm sm:flex sm:justify-between sm:items-center sm:gap-6 md:gap-10 lg:gap-15 xl:gap-20">
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
                    <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
                    <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
                    <Link to="services" smooth={true} duration={500} className="cursor-pointer">Services</Link>
                    <Link to="achievements" smooth={true} duration={500} className="cursor-pointer">Achievements</Link>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact Me</Link>
                </span>
                <img onClick={() => setIsMenuClicked(prev => !prev)} src={isMenuClicked ? crossIcon : menuIcon} alt="menuIcon" className="w-8 h-8 cursor-pointer sm:hidden"/>
                <div className={`absolute right-0 mt-114 bg-blue-950 flex flex-col justify-evenly items-center overflow-hidden transition-all duration-400 ease-in-out ${isMenuClicked ? "opacity-100" : "opacity-0"}`}>
                    <Link to="about" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">About</Link>
                    <Link to="skills" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">Skills</Link>
                    <Link to="projects" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">Projects</Link>
                    <Link to="services" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">Services</Link>
                    <Link to="achievements" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">Achievements</Link>
                    <Link to="contact" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">Contact Me</Link>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-[6vh] py-[6vh] px-5 sm:py-16 md:py-[3vh] md:px-15 md:gap-[5vh] lg:items-start lg:gap-0 lg:flex-row lg:py-[4vh] lg:px-12 xl:py-15 xl:px-20">
                <div className="text-white">
                    <div className="mb-10 lg:mb-15">
                        <h1 className="bg-blue-800 text-purple-400 ring-2 ring-purple-500 shadow-lg shadow-blue-600 text-center w-[42.5vw] py-2 px-3 mb-8 rounded-3xl sm:w-[25vw] md:w-[22vw] lg:text-2xl xl:rounded-2xl xl:w-[15vw]">Ready to Innovate</h1>
                        <h1 className="sm:text-2xl lg:text-3xl">Hello, I'm</h1>
                        <h1 className="text-2xl bg-linear-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Rounak Seth</h1>
                        <h1 className="text-3xl bg-linear-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent sm:text-5xl md:my-3 md:text-5xl lg:my-0 xl:text-6xl font-semibold">MERN Stack Developer</h1>
                        <h1 className="pt-5 text-xs text-gray-300 sm:text-sm md:text-base">I build modern full-stack web applications using React.js, Node.js, Express and MongoDB</h1>
                    </div>
                    <span className="flex flex-row justify-start items-center gap-5 lg:justify-start lg:items-start xl:flex-col xl:justify-center">
                        <a href="/resume.pdf" download="rounak-Seth-Resume.pdf" className="flex justify-center items-center gap-1 bg-linear-to-r from-blue-600 to-purple-700 shadow-lg shadow-blue-800 py-3 px-5 rounded-3xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out text-xs sm:text-sm md:text-base">
                            <img src={fileDownloadIcon} alt="fileDownloadIcon" className="w-4 h-4 sm:w-5 sm:h-5"/>
                            Download Resume
                        </a>
                        <span className="flex justify-start items-center gap-5 sm:gap-8">
                            <a href="https://www.linkedin.com/in/rounakseth" target="_main">
                                <img src={linkedinIcon} alt="linkedinIcon" className="w-8 h-8 cursor-pointer md:w-10 md:h-10"/>
                            </a>
                            <a href="https://github.com/rounakseth0705" target="_main">
                                <img src={gitHubIcon} alt="gitHubIcon" className="w-8 h-8 cursor-pointer md:w-10 md:h-10"/>
                            </a>
                            <a href="https://www.instagram.com/beingrounakkk/" target="_main">
                                <img src={instagramIcon} alt="instagramIcon" className="w-8 h-8 cursor-pointer md:w-10 md:h-10"/>
                            </a>
                        </span>
                    </span>
                </div>
                <div className="p-2.5 bg-linear-to-r from-purple-500/50 to-transparent rounded-full shadow-lg shadow-purple-800">
                    <img src={myPhoto} alt="myPhoto" className="w-80 h-65 rounded-full sm:w-110 sm:h-95 md:w-120 md:h-105 lg:w-85 lg:h-70 xl:w-114 xl:h-95"/>
                </div>
            </div>
        </div>
    )
}

export default Home;