import styled from "styled-components";
import Capabilities from "../../components/Capabilities /Capabilities.tsx";
import Languages from "../../components/Languages/Languages .tsx";


export default function Skills() {

    return <SkillsCnt>
        <Capabilities/>
        <Languages/>
    </SkillsCnt>
}

const SkillsCnt = styled.section`
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 5vw;
    padding: 40px;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 50px;
        justify-content: start;
    }
    
    @media(max-width: 645px) {
        padding: 20px;
    }

    @media (max-width: 645px) {
    }
`
