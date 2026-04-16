import reactIcon from "../assets/reactIcon.svg";
import expressJsIcon from "../assets/jsIcon.svg";
import typeScriptIcon from "../assets/typeScriptIcon.svg";
import tailwindCssIcon from "../assets/tailwindCssIcon.svg";
import javaScriptIcon from "../assets/javaScriptIcon.svg";
import dockerIcon from "../assets/dockerIcon.svg";
import gitIcon from "../assets/gitIcon.svg";
import gitHubIcon from "../assets/gitHubIcon.svg";
import npmIcon from "../assets/npmIcon.svg";
import sqlIcon from "../assets/sqlIcon.png";

const Skills = () => {
    return(
        <div name="skills" className="bg-linear-to-r from-blue-950 to-slate-950 py-12 px-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-purple-500 font-semibold text-2xl py-2 text-center sm:text-5xl">Skills</h1>
            {/* <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-sm my-10 mx-4 text-white md:text-base sm:mx-10 sm:gap-x-12 sm:grid-cols-3 md:gap-x-15 md:mx-16 lg:mx-25 lg:grid-cols-4 lg:gap-x-16 xl:mx-35 xl:gap-x-24">
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">React.js</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">Node.js</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">Express</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">MongoDB</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">Redux.js</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">Docker</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">Git & GitHub</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">Redis</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">Generative AI</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">WebSockets</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">Tailwind CSS</h1>
                <h1 className="flex justify-center items-center bg-blue-900 py-2 rounded-4xl shadow-2xl cursor-pointer hover:bg-blue-800 transition-all duration-400 ease-in-out">REST APIs</h1>
            </div> */}
            <div className="grid grid-cols-1 my-10 gap-x-5 gap-y-7 sm:grid-cols-2 md:gap-x-6 lg:gap-10">
                <span className="flex flex-col items-center gap-3 bg-slate-800 border border-white rounded-2xl py-[3vh]">
                    <h1 className="font-semibold text-2xl text-center text-gray-400">Languages and Frameworks</h1>
                    <span className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="nodeJsIcon" className="w-10 h-7 sm:w-12 sm:h-8"/>
                            <h1 className="text-gray-300 text-sm">Node.js</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={reactIcon} alt="reactIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">React.js</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={expressJsIcon} alt="expressJsIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">Express.js</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-redux-logo-icon-svg-download-png-3030243.png?f=webp" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">Redux.js</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={typeScriptIcon} alt="typeScriptIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">TypeScript</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={tailwindCssIcon} alt="tailwindCssIcon" className="w-6 h-6"/>
                            <h1 className="text-gray-300 text-sm">Tailwind CSS</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={javaScriptIcon} alt="javaScriptIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">JavaScript</h1>
                        </span>
                    </span>
                </span>
                <span className="flex flex-col items-center gap-3 bg-slate-800 border border-white rounded-2xl py-[3vh]">
                    <h1 className="font-semibold text-2xl text-gray-400">Tools and Technologies</h1>
                    <span className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={dockerIcon} alt="dockerIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">Docker</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={gitIcon} alt="gitIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">Git</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={gitHubIcon} alt="gitHubIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">GitHub</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/960px-Visual_Studio_Code_1.35_icon.svg.png" alt="VSCodeIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">VS Code</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://v2.vitejs.dev/logo.svg" alt="viteIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">Vite</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/n8n-icon.png" alt="n8nIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">n8n</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={npmIcon} alt="npmIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">npm</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" alt="postmanIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">Postman</h1>
                        </span>
                    </span>
                </span>
                <span className="flex flex-col items-center gap-3 bg-slate-800 border border-white rounded-2xl py-[3vh]">
                    <h1 className="font-semibold text-2xl text-gray-400">Databases</h1>
                    <span className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/mongodb.png" alt="mongoDBIcon" className="w-5 h-8"/>
                            <h1 className="text-gray-300 text-sm">Mongo DB</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/80/e7/redis_1034x780.png" alt="redisIcon" className="w-9 h-9"/>
                            <h1 className="text-gray-300 text-sm">Redis</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src={sqlIcon} alt="sqlIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">SQL</h1>
                        </span>
                    </span>
                </span>
                <span className="flex flex-col items-center gap-3 bg-slate-800 border border-white rounded-2xl py-[3vh]">
                    <h1 className="font-semibold text-2xl text-gray-400">Other Skills</h1>
                    <span className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" alt="linuxIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">Linux</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://images.vexels.com/media/users/3/139381/isolated/preview/2303dfcf2e321a00419406eed3a72ec0-triangle-sign.png" alt="vercelIcon" className="w-8 h-8"/>
                            <h1 className="text-gray-300 text-sm">Vercel</h1>
                        </span>
                        <span className="flex justify-center items-center gap-2 w-[32vw] h-12 border border-gray-500 bg-gray-900 rounded-3xl cursor-pointer sm:w-[19vw] md:gap-3 md:w-[17vw] lg:w-[13vw] lg:h-[6.5vh] xl:w-[10vw] xl:h-[6.5vh]">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURXSVJcJLHRlQApPQ2jJBniDiuSsdos84MA&s" alt="canvaIcon" className="w-6 h-6"/>
                            <h1 className="text-gray-300 text-sm">Canva</h1>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Skills;