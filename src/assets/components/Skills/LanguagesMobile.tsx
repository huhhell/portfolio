import {Language} from "./Languages .tsx";
import styled from "styled-components";

interface Props {
    languages: Language[],
}

export default function LanguagesMobile({languages}: Props) {

    return <Container>
        <Title>Технологии</Title>
        <List>
            {languages.map(i => <ListItem key={i.id}>
                <ItemTitle>{i.name}</ItemTitle>
                <ProgressCnt>
                    <ProgressColor $progress={i.progress}>
                        <ProgressMask></ProgressMask>
                    </ProgressColor>
                </ProgressCnt>
            </ListItem>)}
        </List>
    </Container>
}

const Container = styled.div`
    width: 100%;
    
    @media (min-width: 900px) {
        display: none;
    }
`

const Title = styled.h4`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;

    @media (max-width: 645px) {
        font-size: 24px;
        margin-bottom: 30px;
    }
`

const List = styled.ul`
    //display: flex;
    //align-items: center;
    //justify-content: space-between;
    gap: 20px;
    
    display: grid;
    grid-template: 1fr / repeat(6, 1fr);
    align-items: center;
    
    @media(max-width: 800px) {
        grid-template: repeat(2, 1fr) / repeat(3, 1fr);
        gap: 30px;
    }
`

const ListItem = styled.li`
    flex: 0 0 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ItemTitle = styled.h6`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;

    @media (max-width: 645px) {
        font-size: 16px;
    }
`

const ProgressCnt = styled.div`
    width: 100px;
    position: relative;
    background: #444444;
    border-radius: 50%;
    aspect-ratio: 1/1;
    
    @media(max-width: 645px) {
        width: 75px;
    }
`

const ProgressColor = styled.div<{$progress?: string}>`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    --value: 70%;
    background: conic-gradient(#237CED ${props => props.$progress}, transparent 0);
    //transform: rotate(270deg);
    padding: 10px;
    
    @media(max-width: 645px) {
        padding: 7px;
    }
`

const ProgressMask = styled.div `
    width: 100%;
    height: 100%;
    background-color: #222222;
    border-radius: 50%;
`