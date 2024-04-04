import styled from "styled-components";
import Project from "../../data/projects.ts";
import {Link} from "react-router-dom";


interface Props {
    projects: Project[],
    openProject: (id: number) => void,
}

export default function ProjectsList({projects, openProject}: Props) {

    return <Container>
        {projects.map(i => <ProjectContainer key={i.id} onClick={() => openProject(i.id)}>
            <LinkCnt to='/project'>
                <ProjectTitle>{i.name}</ProjectTitle>
                <ProjectDescription>{i.descriptionShort}</ProjectDescription>
                <ProjectImg src={i.img[0].img}></ProjectImg>
            </LinkCnt>
        </ProjectContainer> )}
    </Container>
}


const Container = styled.div`
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    gap: 40px;
    
    @media(max-width: 1000px) {
        grid-template: repeat(3, 1fr) / repeat(2, 1fr);
        gap: 30px;
    }
    
   @media(max-width: 645px) {
    gap: 20px;
   }
    
    @media(max-width: 500px) {
        grid-template: repeat(6, 1fr) / 1fr;
    }
`

const ProjectContainer = styled.div`
    position: relative;
    width: 100%;
    background: #0000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 20px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    aspect-ratio: 5/3;

    @media (max-width: 645px) {
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
    }
`

const ProjectImg = styled.img`
    position: absolute;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .5s ease;
    
    &:hover {
        opacity: 0.2;
    }
    
    @media(max-width: 1000px) {
        opacity: 1;
        
        &:hover {
            opacity: 1;
        }
    }
`

const ProjectTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 15px;
    text-align: center;

    @media (max-width: 1000px) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px 0;
        background-color: rgba(34, 34, 34, 0.5);
        z-index: 222;
        margin-bottom: 0;
    }
`

const ProjectDescription = styled.p`
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    margin-bottom: 20px;
    
    @media(max-width: 1000px) {
        display: none;
    }
`

const LinkCnt = styled(Link)`
    color: #ffffff;
`


