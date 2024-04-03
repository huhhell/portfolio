import styled from "styled-components";
import Project from "../../data/projects.ts";


interface Props {
    projects: Project[]
}
export default function ProjectsList({projects}: Props) {

    return <Container>
        {projects.map(i => <ProjectContainer key={i.id}>
            <ProjectTitle>{i.name}</ProjectTitle>
            <ProjectDescription>{i.description}</ProjectDescription>
            <ProjectMore>Открыть</ProjectMore>
            <ProjectImg src={i.img[0].img}></ProjectImg>
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
`

const ProjectTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 15px;
    text-align: center;
`

const ProjectDescription = styled.p`
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    margin-bottom: 20px;
`

const ProjectMore = styled.button`
    padding: 7px 20px;
    font-size: 18px;
    border-radius: 20px;
    background: #000;
    color: #ffffff;
    border: 2px solid #b0b0b0;
`


