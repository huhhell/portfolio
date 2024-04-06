import styled from "styled-components";
import LanguagesMobile from "./LanguagesMobile.tsx";

export interface Language {
    name: string,
    progress: string,
    id: number
}

export default function Languages() {
    const languages: Language[] = [
        {name: 'React', progress: '60%', id: 0},
        {name: 'TypeScript', progress: '40%', id: 1},
        {name: 'JavaScript', progress: '80%', id: 2},
        {name: 'HTML/CSS', progress: '95%', id: 3},
        {name: 'SCSS', progress: '95%', id: 4},
        {name: 'Testing', progress: '50%', id: 5},
    ]

    return <>
        <SkillsBlock>
        <SectionTitle>Технологии</SectionTitle>
        <SkillsList>
            {languages.map(i => <SkillsItem key={i.id}>
                <SkillsItemName>{i.name}</SkillsItemName>
                <SkillsItemProgressCnt>
                    <SkillsItemProgress $progress={i.progress}></SkillsItemProgress>
                </SkillsItemProgressCnt>
            </SkillsItem>)}
        </SkillsList>
    </SkillsBlock>
        <LanguagesMobile languages={languages} />
        </>
}


const SkillsBlock = styled.div`
    flex: 0 1 40%;
    
    @media (max-width: 900px) {
        display: none;
    }
`

const SectionTitle = styled.h4`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;

    @media (max-width: 645px) {
        font-size: 24px;
        margin-bottom: 30px;
    }
`

const SkillsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const SkillsItem = styled.li``

const SkillsItemName = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    
    @media (max-width: 645px) {
        font-size: 18px;
    }
`

const SkillsItemProgressCnt = styled.div`
    height: 15px;
    border: 2px solid #444;
    border-radius: 8px;
    padding: 2px;
`

const SkillsItemProgress = styled.div<{$progress?: string}>`
    width: ${props => props.$progress};
    height: 100%;
    background: #007CED;
    border-radius: 8px;
`