import styled from "styled-components";
import reactImg from '../../img/skills/react.svg';
import javascriptImg from '../../img/skills/javascript.svg';
import htmlImg from '../../img/skills/html.svg';


export default function Capabilities() {

    return <CapabilitiesBlock>
        <SectionTitle>Что делаю?</SectionTitle>
        <CapabilitiesItem>
            <CapabilitiesIcon src={reactImg}/>
            <CapabilitiesInfo>
                <CapabilitiesTitle>React</CapabilitiesTitle>
                <CapabilitiesText>
                    {/* todo выделить библиотеки */}
                    Занимаюсь созданием одностраничных и многостраничных веб-страниц. Базируюсь на методологии Робета
                    Мартина при написании кода. Из фреймворков наиболее часто использую: Material UI, Styled Components,
                    React Router, React Testing Library.
                </CapabilitiesText>
            </CapabilitiesInfo>
        </CapabilitiesItem>
        <CapabilitiesItem>
            <CapabilitiesIcon src={javascriptImg}/>
            <CapabilitiesInfo>
                <CapabilitiesTitle>JavaScript / Typescript</CapabilitiesTitle>
                <CapabilitiesText>
                    Прекрасно владею навыками браузерного JS, написала более 20 проектов в связке ‘HTML / JS’. Знаю
                    когда стоит использовать React, а когда можно обойтись без него. Технологии которые использую: Jest,
                    MUI.
                </CapabilitiesText>
            </CapabilitiesInfo>
        </CapabilitiesItem>
        <CapabilitiesItem>
            <CapabilitiesIcon src={htmlImg}/>
            <CapabilitiesInfo>
                <CapabilitiesTitle>HTML / CSS</CapabilitiesTitle>
                <CapabilitiesText>
                    Люблю простую и элегантную верстку. Отдельное внимание уделяю отзывчивости, кроссбраузерности и
                    доступности (для маломобильных людей). Моя позиция - иногда стоит присмотреться к “ванильной"
                    разработке, нежели настраивать технологии поверх самого простого сайта. Из используемых технологий предпочитаю SCSS.
                </CapabilitiesText>
            </CapabilitiesInfo>
        </CapabilitiesItem>
    </CapabilitiesBlock>
}

const CapabilitiesBlock = styled.div`
    flex: 0 1 60%;

    
    @media (max-width: 1000px) {
        flex: 0 1 70%;
    }
`
const SectionTitle = styled.h4`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
    
    @media(max-width: 1000px) {
        
    }
    
    @media (max-width: 645px) {
        font-size: 24px;
        margin-bottom: 20px;
    }
`
const CapabilitiesItem = styled.div`
    display: flex;
    gap: 20px;

    &:not(:last-child) {
        margin-bottom: 30px;
    }
`

const CapabilitiesIcon = styled.img`
    width: 40px;
    height: 40px;
`

const CapabilitiesInfo = styled.div``

const CapabilitiesTitle = styled.h6`
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: 700;
    
    @media (max-width: 645px) {
        font-size: 18px;
    }
`

const CapabilitiesText = styled.p`
    font-size: 16px;
    line-height: 130%;
    
    @media (max-width: 645px) {
    }
`