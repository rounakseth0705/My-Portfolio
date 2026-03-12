import emailIcon from "../assets/emailIcon.svg";
import phoneIcon from "../assets/phoneIcon.svg";
import collegeBuildingIcon from "../assets/collegeBuildingIcon.svg";
import graduationCapIcon from "../assets/graduationCapIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import gitHubIcon from "../assets/gitHubIcon.svg";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(import.meta.env.VITE_BACKEND_URL);
        try {
            const response = await axios.post(`http://localhost:6001/api/send-mail`, { name, email, message });
            if (response) {
                if (response.data.success) {
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            } else {
                toast.error("Something went wrong!");
            }
        } catch(error) {
            toast.error(error.message);
        }
    }
    return(
        <div name="contact" className="bg-slate-950 py-12 px-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-white text-center font-semibold text-2xl sm:text-3xl">Contact</h1>
            <div className="flex flex-col justify-between items-center gap-5 my-12 md:flex-row md:justify-evenly">
                <span className="flex flex-col justify-between items-center gap-10 bg-slate-900 text-center px-3 py-5 rounded-2xl hover:bg-slate-800 transition-all duration-500 ease-in-out sm:px-15 md:px-5 lg:px-12 xl:px-20">
                    <h1 className="text-white font-semibold sm:text-2xl">Personal Info</h1>
                    <div className="flex flex-col justify-center items-start gap-4">
                        <span className="flex justify-center items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5">
                            <img src={emailIcon} alt="emailIcon" className="w-5 h-5"/>
                            <h1 className="text-white text-sm sm:text-base md:text-sm lg:text-base">sethrounak7@gmail.com</h1>
                        </span>
                        <span className="flex justify-center items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5">
                            <img src={phoneIcon} alt="phoneIcon" className="w-5 h-5"/>
                            <h1 className="text-white text-sm sm:text-base md:text-sm lg:text-base">+91 9354549513</h1>
                        </span>
                        <span className="flex justify-center items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5">
                            <img src={collegeBuildingIcon} alt="collegeBuildingIcon" className="w-5 h-5"/>
                            <h1 className="text-white text-sm sm:text-base md:text-sm lg:text-base">IIMT Group of Colleges, 2024-27</h1>
                        </span>
                        <span className="flex justify-center items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5">
                            <img src={graduationCapIcon} alt="graduationCapIcon" className="w-5 h-5"/>
                            <h1 className="text-white text-sm sm:text-base md:text-sm lg:text-base">BCA, CGPA :- 7.55</h1>
                        </span>
                        <span className="flex justify-center items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5">
                            <img src={linkedinIcon} alt="linkedinIcon" className="w-5 h-5"/>
                            <a href="https://www.linkedin.com/in/rounakseth" target="_main" className="text-white text-sm sm:text-base md:text-sm lg:text-base">https://www.linkedin.com/in/rounakseth</a>
                        </span>
                        <span className="flex justify-center items-center gap-3 sm:gap-4 md:gap-3 lg:gap-5">
                            <img src={gitHubIcon} alt="gitHubIcon" className="w-5 h-5"/>
                            <a href="https://github.com/rounakseth0705" target="_main" className="text-white text-sm sm:text-base md:text-sm lg:text-base">https://github.com/rounakseth0705</a>
                        </span>
                    </div>
                </span>
                <span className="flex flex-col justify-between items-center gap-6 px-6 py-5 rounded-2xl bg-slate-900 sm:px-16 md:px-8 lg:px-12 lg:gap-11 xl:px-20 xl:gap-9.5">
                    <h1 className="text-white font-semibold sm:text-2xl">Send Mail</h1>
                    <form className="flex flex-col justify-center items-center gap-5">
                        <input onChange={(event) => setName(event.target.value)} value={name} type="text" placeholder="enter name" className="bg-slate-600 outline-0 rounded-2xl px-3 py-1 w-65 text-sm sm:w-75 md:w-60 lg:w-75 xl:text-base"/>
                        <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" placeholder="enter email" className="bg-slate-600 outline-0 rounded-2xl px-3 py-1 w-65 text-sm sm:w-75 md:w-60 lg:w-75 xl:text-base"/>
                        <textarea onChange={(event) => setMessage(event.target.value)} rows={3} cols={22} placeholder="enter your message" className="bg-slate-600 outline-0 rounded px-2 py-1 text-sm w-65 sm:w-75 md:w-60 lg:w-75"></textarea>
                        <button onClick={handleSubmit} className="bg-slate-600 text-white cursor-pointer rounded-2xl hover:bg-slate-500 transition-all duration-400 ease-in-out py-1 px-8">Send</button>
                    </form>
                </span>
            </div>
        </div>
    )
}

export default Contact;