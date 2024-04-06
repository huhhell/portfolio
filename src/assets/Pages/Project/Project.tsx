import styled from "styled-components";
import Project from "../../data/projects.tsx";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo.tsx";
import ProjectLinks from "../../components/ProjectLinks /ProjectLinks.tsx";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery.tsx";


interface Props {
    project: Project,
    toggleScroll: () => void,
}

export default function ProjectPage({project, toggleScroll}: Props) {

    return <Container>
        <ProjectInfo project={project} />
        <ProjectGallery images={project.img} toggleScroll={toggleScroll}/>
        <LinksContainer>
            <ProjectLinks tech={project.tech} links={project.links} />
        </LinksContainer>
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
        gap: 30px;
        padding: 20px 20px 40px 20px;
    }
`

const LinksContainer = styled.div`
    display: none;
    
    @media(max-width: 645px) {
        display: block;
    }
`
