import formalPic from "../assets/formalPic.jpeg";

const About = () => {
    return(
        <div name="about" className="flex flex-col justify-center items-center gap-12 bg-slate-950 py-8 px-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-center text-white py-2 text-2xl font-semibold sm:text-3xl">About Me</h1>
            <img src={formalPic} alt="formalPic" className="w-30 h-30 text-sm rounded-full sm:text-base sm:w-40 sm:h-40 md:w-50 md:h-50"/>
            <h1 className="bg-slate-900 text-white shadow-2xl my-3 py-4 px-6 rounded-2xl sm:my-8 md:mx-5 lg:mx-8 xl:mx-10">Hi, I'm Rounak Seth, a Full Stack Developer specializing in the MERN stack. I build scalable, efficient, and user-friendly web applications. I have experience developing secure REST APIs, implementing JWT authentication, using Redis for caching, and building real-time applications with WebSockets. I create responsive UIs with React and Tailwind CSS, and use Docker and Git to maintain efficient development and deployment workflows. I'm always eager to learn and solve real-world problems through software.</h1>
        </div>
    )
}

export default About;