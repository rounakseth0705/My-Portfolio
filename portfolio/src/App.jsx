import About from "./components/About.jsx";
import Achievements from "./components/Achievements.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";

const App = () => {
    return(
        <>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Services/>
            <Achievements/>
        </>
    )
}

export default App;