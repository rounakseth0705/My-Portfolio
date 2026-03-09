import About from "./components/About.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
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
            <Contact/>
        </>
    )
}

export default App;