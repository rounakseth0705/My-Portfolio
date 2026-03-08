import { useState } from "react";
import { Link } from "react-scroll";
import menuIcon from "../assets/menuIcon.svg";
import crossIcon from "../assets/crossIcon.svg";
import codeIcon from "../assets/codeIcon.svg";
import myPhoto from "../assets/photo.jpeg";
import gitHubIcon from "../assets/gitHubIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";

const Home = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    return(
        <div className="bg-linear-to-r from-blue-950 to-black">
            <div className="flex justify-between items-center py-8 text-white px-8 md:px-15 lg:px-12 xl:px-20">
                <img src={codeIcon} alt="codeIcon" className="w-8 h-8"/>
                <span className="hidden text-sm sm:flex sm:justify-between sm:items-center sm:gap-6 md:gap-10 lg:gap-15 xl:gap-20">
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
                    <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
                    <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
                    <Link to="achievements" smooth={true} duration={500} className="cursor-pointer">Achievements</Link>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact Me</Link>
                </span>
                <img onClick={() => setIsMenuClicked(prev => !prev)} src={isMenuClicked ? crossIcon : menuIcon} alt="menuIcon" className="w-8 h-8 cursor-pointer sm:hidden"/>
                <div className={`fixed right-0 mt-98 bg-blue-950 flex flex-col justify-evenly items-center overflow-hidden transition-all duration-400 ease-in-out ${isMenuClicked ? "opacity-100" : "opacity-0"}`}>
                    <Link to="about" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">About</Link>
                    <Link to="skills" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">Skills</Link>
                    <Link to="projects" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">Projects</Link>
                    <Link to="achievements" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">Achievements</Link>
                    <Link to="contact" smooth={true} duration={500} className="my-6 mx-15 cursor-pointer">Contact Me</Link>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-12 py-5 px-8 lg:items-start lg:gap-0 lg:flex-row lg:py-15 md:px-15 lg:px-12 xl:px-20">
                <div className="text-white">
                    <div className="mb-10 lg:mb-15">
                        <h1 className="sm:text-2xl lg:text-3xl">Hello, I'm</h1>
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold">Rounak Seth</h1>
                        <h1 className="text-2xl sm:text-5xl md:text-5xl xl:text-6xl font-semibold">MERN Stack Developer</h1>
                        <h1 className="pt-5 text-xs sm:text-sm md:text-base">I build modern full-stack web applications using React.js, Node.js, Express and MongoDB</h1>
                    </div>
                    <span className="flex flex-row justify-start items-center gap-5 lg:flex-col lg:justify-center lg:items-start">
                        <a className="bg-blue-900 py-3 px-5 rounded-3xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out text-xs sm:text-sm md:text-base">Download Resume</a>
                        <span className="flex justify-start items-center gap-6 sm:gap-8">
                            <a href="https://www.linkedin.com/in/rounakseth" target="_main">
                                <img src={linkedinIcon} alt="linkedinIcon" className="w-8 h-8 cursor-pointer md:w-10 md:h-10"/>
                            </a>
                            <a href="https://github.com/rounakseth0705" target="_main">
                                <img src={gitHubIcon} alt="gitHubIcon" className="w-8 h-8 cursor-pointer md:w-10 md:h-10"/>
                            </a>
                        </span>
                    </span>
                </div>
                <img src={myPhoto} alt="myPhoto" className="w-75 h-60 rounded-full sm:w-90 sm:h-75 lg:w-85 lg:h-70 xl:w-114 xl:h-95"/>
            </div>
        </div>
    )
}

export default Home;