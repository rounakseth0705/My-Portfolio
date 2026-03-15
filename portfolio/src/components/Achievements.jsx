const Achievements = () => {
    return(
        <div name="achievements" className="bg-linear-to-r from-blue-950 to-black py-10 px-8 md:px-15 lg:px-12 xl:px-20">
            <h1 className="text-center text-white font-semibold text-2xl sm:text-3xl">Achievements</h1>
            <div className="grid grid-cols-1 gap-5 mt-10 px-5 text-sm sm:px-8 sm:text-base sm:grid-cols-2 sm:gap-5">
                <span className="bg-slate-900 text-white flex justify-center items-center rounded py-2 px-3 hover:bg-slate-800 transition-all duration-500 ease-in-out">Secured 3rd place in the Code Odyssey Hackathon (April 2025), where I collaborated to design and develop a practical tech solution under strict time constraints, demonstrating strong problem-solving, teamwork, and full-stack development skills.</span>
                <span className="bg-slate-900 text-white flex justify-center items-center rounded py-2 px-3 hover:bg-slate-800 transition-all duration-500 ease-in-out">Won the Business Model Competition (BMC) in November 2024 by presenting an innovative product idea built on the MERN Stack integrated with Generative AI, demonstrating strong skills in technical architecture, problem-solving, and business-oriented thinking.</span>
            </div>
        </div>
    )
}

export default Achievements;