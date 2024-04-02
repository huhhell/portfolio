import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home.tsx";
import Skills from "../Pages/Skills/Skills.tsx";
import Portfolio from "../Pages/Portfolio/Portfolio.tsx";
import ProjectPage from "../Pages/Project/Project.tsx";
import {projects} from "../data/projects.ts";

interface Props {
    activeProject: number,
    openProject: (id: number) => void
}

export default ({activeProject, openProject}: Props) => {
    return <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/project' element={<ProjectPage project={projects[activeProject]} />} />
    </Routes>
}