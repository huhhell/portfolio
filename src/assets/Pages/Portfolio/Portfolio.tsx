import {useState} from "react";
import ProjectsListCategories from "../../components/ProjectsListCategories/ProjectsListCategories.tsx";
import styled from "styled-components";
import ProjectsList from "../../components/ProjectsList/ProjectsList.tsx";
import Project, {projects} from "../../data/projects.tsx";


interface Props {
    openProject: (id: number) => void
}

export default function Portfolio({openProject}: Props) {
    const [activeCategory, setActiveCategory] = useState(0)
    const categories = ['All', 'React', 'HTML / CSS', 'Components']

    function handleActiveCategory(id: number) {
        setActiveCategory(id)
    }

    function filterProjects(activeCategoryId: number): Project[] {
        if (activeCategoryId === 0) return projects;

        return projects.filter((i :Project) => i.category === categories[activeCategoryId])
    }

    return <Container>
            <ProjectsListCategories categories={categories}
                                    activeCategory={activeCategory}
                                    handleActiveCategory={handleActiveCategory}/>
        <ProjectsList projects={filterProjects(activeCategory)} openProject={openProject}></ProjectsList>
        </Container>
}

const Container = styled.section`
    padding: 40px;

    @media(max-width: 645px) {
        padding: 20px;
    }
`