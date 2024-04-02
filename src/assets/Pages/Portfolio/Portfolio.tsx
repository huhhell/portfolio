import {useState} from "react";
import ProjectsCategories from "../../components/ProjectsCategories/ProjectsCategories.tsx";
import styled from "styled-components";
import Projects from "../../components/Projects/Projects.tsx";
import Project, {projects} from "../../data/Projects.ts";

export default function Portfolio() {
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
            <ProjectsCategories categories={categories}
                                activeCategory={activeCategory}
                                handleActiveCategory={handleActiveCategory}/>
        <Projects projects={filterProjects(activeCategory)}></Projects>
        </Container>
}

const Container = styled.section`
    padding: 40px;

    @media(max-width: 645px) {
        padding: 20px;
    }
`