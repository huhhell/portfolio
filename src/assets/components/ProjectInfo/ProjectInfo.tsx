import styled from "styled-components";
import Project from "../../data/projects.ts";
import ProjectLinks from "../ProjectLinks /ProjectLinks.tsx";

interface Props {
    project: Project
}

export default function ProjectInfo({project}: Props) {

    return <Info>
        <Title>{project.name}</Title>
        <Text>{project.descriptionLong}</Text>
        <LinksContainer>
            <ProjectLinks tech={project.tech} links={project.links} />
        </LinksContainer>
    </Info>
}

const Info = styled.div`
    flex: 0 0 50%;
    
    @media(max-width: 1000px) {
        flex: 0 0 30%;
    }
    
    @media(max-width: 645px) {
        flex: 0 0 auto;
    }
`

const Title = styled.h1`
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 40px;
    
    @media(max-width: 1000px) {
        font-size: 35px;
        margin-bottom: 20px;
    }
    
    @media(max-width: 645px) {
        font-size: 25px;
        margin-bottom: 15px;
    }
`

const Text = styled.p`
    font-size: 20px;
    margin-bottom: 50px;
    
    @media(max-width: 1000px) {
        font-size: 16px;
        line-height: 120%;
    }
    
    @media(max-width: 645px) {
        margin-bottom: 0;
    }
`

const LinksContainer = styled.div`
    
    @media(max-width: 645px) {
        display: none;
    }
`
