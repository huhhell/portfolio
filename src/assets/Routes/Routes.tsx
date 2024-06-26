import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home.tsx";
import Skills from "../Pages/Skills/Skills.tsx";
import Portfolio from "../Pages/Portfolio/Portfolio.tsx";
import ProjectPage from "../Pages/Project/Project.tsx";
import {projects} from "../data/projects.tsx";
import Contact from "../Pages/Contact/Contact.tsx";

interface Props {
    activeProject: number,
    openProject: (id: number) => void,
    toggleScroll: () => void,
}

export default ({activeProject, openProject, toggleScroll}: Props) => {
    return <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio openProject={openProject}/>} />
        <Route path='/project' element={<ProjectPage project={projects[activeProject]} toggleScroll={toggleScroll}/>} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
}