import formalPic from "../assets/formalPic.jpeg";

const About = () => {
    return(
        <div name="about" className="flex flex-col justify-center items-center gap-12 bg-blue-950 py-8 px-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-center text-white py-2 text-2xl font-semibold sm:text-3xl">About Me</h1>
            <img src={formalPic} alt="formalPic" className="w-30 h-30 rounded-full sm:w-40 sm:h-40 md:w-50 md:h-50"/>
            <h1 className="text-white">Hi, I'm Rounak Seth, a passionate Full Stack Developer specializing in the MERN stack. I enjoy building modern web applications that are scalable, efficient, and user-friendly. I have experience developing secure REST APIs, implementing JWT authentication, integrating Redis caching for performance optimization, and building real-time applications using WebSockets. On the frontend, I focus on creating responsive and clean interfaces using React and Tailwind CSS. I also work with Docker for containerization and Git for version control, which helps me maintain efficient development workflows and deployment processes. I am always eager to learn new technologies and solve real-world problems through software.</h1>
        </div>
    )
}

export default About;