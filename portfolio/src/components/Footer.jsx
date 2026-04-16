import linkedinIcon from "../assets/linkedinIcon.svg";
import gitHubIcon from "../assets/gitHubIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import { Link } from "react-scroll";

const Footer = () => {
    return(
        <div className="flex flex-col justify-center items-center bg-slate-950 pb-10 px-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-purple-500 font-semibold text-2xl">Rounak Seth</h1>
            <div className="flex flex-wrap justify-center items-center text-white mt-5 gap-5 sm:gap-8 md:gap-9.5 lg:gap-15 xl:gap-20">
                <Link to="home" smooth={true} duration={500} className="cursor-pointer text-sm sm:text-base">Home</Link>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer text-sm sm:text-base">About</Link>
                <Link to="skills" smooth={true} duration={500} className="cursor-pointer text-sm sm:text-base">Skills</Link>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-sm sm:text-base">Projects</Link>
                <Link to="services" smooth={true} duration={500} className="cursor-pointer text-sm sm:text-base">Services</Link>
                <Link to="achievements" smooth={true} duration={500} className="cursor-pointer text-sm sm:text-base">Achievements</Link>
            </div>
            <span className="flex justify-between items-center gap-10 pt-5">
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
            <h1 className="text-white pt-5 text-sm sm:text-base">© 2026 Rounak Seth. All rights reserved.</h1>
        </div>
    )
}

export default Footer;