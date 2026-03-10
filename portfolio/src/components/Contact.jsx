import emailIcon from "../assets/emailIcon.svg";
import phoneIcon from "../assets/phoneIcon.svg";
import collegeBuildingIcon from "../assets/collegeBuildingIcon.svg";
import graduationCapIcon from "../assets/graduationCapIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import gitHubIcon from "../assets/gitHubIcon.svg";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async () => {
        const response = await axios.post("", { name, email, message });
        if (response) {
            
        } else {
            
        }
    }
    return(
        <div name="contact" className="bg-slate-950 py-10 px-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-white text-center font-semibold text-2xl sm:text-3xl">Contact</h1>
            <div className="flex flex-col justify-between items-center gap-5 my-8 md:flex-row md:justify-evenly">
                <span className="flex flex-col justify-between items-center gap-10 bg-slate-900 text-center px-3 py-5 rounded-2xl hover:bg-slate-800 transition-all duration-500 ease-in-out sm:px-15 md:px-8 lg:px-12 xl:px-20">
                    <h1 className="text-white font-semibold sm:text-2xl">Personal Info</h1>
                    <div className="flex flex-col justify-center items-start gap-4">
                        <span className="flex justify-center items-center gap-3">
                            <img src={emailIcon} alt="emailIcon" className="w-5 h-5"/>
                            <h1 className="text-white text-sm xl:text-base">sethrounak7@gmail.com</h1>
                        </span>
                        <span className="flex justify-center items-center gap-3">
                            <img src={phoneIcon} alt="phoneIcon" className="w-5 h-5"/>
                            <h1 className="text-white text-sm xl:text-base">+91 9354549513</h1>
                        </span>
                        <span className="flex justify-center items-center gap-3">
                            <img src={collegeBuildingIcon} alt="collegeBuildingIcon" className="w-5 h-5"/>
                            <h1 className="text-white text-sm xl:text-base">IIMT Group of Colleges, 2024-27</h1>
                        </span>
                        <span className="flex justify-center items-center gap-3">
                            <img src={graduationCapIcon} alt="graduationCapIcon" className="w-5 h-5"/>
                            <h1 className="text-white text-sm xl:text-base">BCA, CGPA:- 7.55</h1>
                        </span>
                        <span className="flex justify-center items-center gap-3">
                            <img src={linkedinIcon} alt="linkedinIcon" className="w-5 h-5"/>
                            <a href="https://www.linkedin.com/in/rounakseth" target="_main" className="text-white text-sm xl:text-base">https://www.linkedin.com/in/rounakseth</a>
                        </span>
                        <span className="flex justify-center items-center gap-3">
                            <img src={gitHubIcon} alt="gitHubIcon" className="w-5 h-5"/>
                            <a href="https://github.com/rounakseth0705" target="_main" className="text-white text-sm xl:text-base">https://github.com/rounakseth0705</a>
                        </span>
                    </div>
                </span>
                <span className="flex flex-col justify-between items-center gap-10 px-3 py-5 rounded-2xl bg-slate-900 sm:px-15 md:px-8 lg:px-12 xl:px-20">
                    <h1 className="text-white font-semibold sm:text-2xl">Send Mail</h1>
                    <form className="flex flex-col justify-center gap-5">
                        <input onChange={(event) => setName(event.target.value)} value={name} type="text" placeholder="enter name" className="bg-slate-600 outline-0 rounded-2xl px-3 py-1 text-sm xl:text-base"/>
                        <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" placeholder="enter email" className="bg-slate-600 outline-0 rounded-2xl px-3 py-1 text-sm xl:text-base"/>
                        <textarea onChange={(event) => setMessage(event.target.value)} rows={3} cols={22} className="bg-slate-600 outline-0 rounded px-2 py-1 text-sm"></textarea>
                        <button onClick={handleSubmit} className="bg-slate-600 text-white cursor-pointer rounded-2xl hover:bg-slate-500 transition-all duration-400 ease-in-out">Send</button>
                    </form>
                </span>
            </div>
        </div>
    )
}

export default Contact;