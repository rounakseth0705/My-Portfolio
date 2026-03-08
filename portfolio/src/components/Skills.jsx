const Skills = () => {
    return(
        <div name="skills" className="bg-linear-to-r from-blue-950 to-black py-12 px-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-white font-semibold text-2xl py-2 text-center sm:text-3xl">Skills</h1>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-sm my-10 mx-4 text-white md:text-base sm:mx-10 sm:gap-x-12 sm:grid-cols-3 md:gap-x-15 md:mx-16 lg:mx-25 lg:grid-cols-4 lg:gap-x-16 xl:mx-35 xl:gap-x-24">
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
            </div>
        </div>
    )
}

export default Skills;