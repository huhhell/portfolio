import styled from "styled-components";
import Project from "../../data/projects.ts";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo.tsx";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery.tsx";


interface Props {
    project: Project,
    // openProject: (id: number) => void
}

export default function ProjectPage({project}: Props) {

    return <Container>
        <ProjectInfo project={project} />
        <ProjectGallery images={project.img}/>
    </Container>
}


const Container = styled.section`
    display: flex;
    gap: 5vw;
    padding: 40px;
    
    @media(max-width: 1000px) {
        gap: 2vw;
    }
    
    @media(max-width: 645px) {
        flex-direction: column;
        gap: 50px;
        padding: 20px;
    }
`


