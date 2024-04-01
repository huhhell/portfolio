import styled from "styled-components";
import Capabilities from "../../components/Skills/Capabilities.tsx";
import Languages from "../../components/Skills/Languages .tsx";


// todo add a text here
export default function Skills() {

    return <SkillsCnt>
        <Title>Skills</Title>
        <FlexCnt>
           <Capabilities />
            <LanguagesCnt>
                <Languages />
            </LanguagesCnt>
        </FlexCnt>
    </SkillsCnt>
}

const SkillsCnt = styled.section`
    height: 100vh;
    width: 100%;
    scroll-snap-align: start;
    padding-top: 15vh;
    
    @media (max-width: 645px) {
        padding-top: 10vh;
    }
`

const Title = styled.h2`
    font-size: 45px;
    padding: 5vh 40px;
    background: #252525;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    margin-bottom: 40px;
    letter-spacing: 2px;

    @media (max-width: 645px) {
        font-size: 30px;
        padding: 3vh 40px;
        margin-bottom: 20px;
    }
`

const FlexCnt = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 5vw;
    padding: 0 40px;
    
    @media (max-width: 1000px) {
        display: block;
    }
`

const LanguagesCnt = styled.div`
    flex: 0 1 50%;
    
    @media (max-width: 1000px) {
        display: none;
    }
`
