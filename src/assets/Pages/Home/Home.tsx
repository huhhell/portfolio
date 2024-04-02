import styled from "styled-components";

export default function Home() {

    return <HomeCnt>
        <AvatarCnt>
            <AvatarImg/>
        </AvatarCnt>
        <Info>
            <Subtitle>Frontend Developer</Subtitle>
            <Title>Виктория Безрукова</Title>
            <Text>
                Фронтенд разработчик с 2+ годами опыта. Постоянно изучаю новые технологии, а так же слежу за
                обновлениями существующих. В разработке ценю чистый код, компактность и простоту . Не боюсь просить
                помощи опытных коллег и помогать тем, кто только начинает.
                <br />
                Посещаю различные конференции, встречи и митапы разработчиков для общения с коллегами и получения
                новых
                знаний. Cпокойно воспринимаю информацию из документаций, статей и книг на английском языке.
            </Text>
            <LinksGroup>
                <PortfolioLink>Портфолио</PortfolioLink>
                <ContactLink>Контакты</ContactLink>
            </LinksGroup>
        </Info>
    </HomeCnt>
}

const HomeCnt = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    scroll-snap-align: start;
    padding: 40px;
    
    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: start;
        gap: 20px;
    }
    @media (max-width: 645px) {
        padding: 20px;
    }
`

const AvatarCnt = styled.div`
    flex: 0 1 50%;
    max-width: 400px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 10px solid #444;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.80);
    
    @media (max-width: 900px) {
        flex: 0 0 auto;
        width: 40%;
        max-width: 200px;
        aspect-ratio: 1/1;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.80);
    }
    
    @media (max-width: 600px) {
        max-width: 200px;
        border: 5px solid #444;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.80);
    }
`

const AvatarImg = styled.img`

`

const Info = styled.div`
    flex: 0 0 50%;
`
const Subtitle = styled.p`
    color: rgba(255, 255, 255, 0.50);
    font-size: 20px;
    margin-bottom: 15px;
    
    @media (max-width: 900px) {
        text-align: center;
    }
    
    @media (max-width: 600px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 30px;

    @media (max-width: 900px) {
        text-align: center;
    }
    
    @media (max-width: 600px) {
        font-size: 24px;
        margin-bottom: 20px;
    }
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: 130%;
    margin-bottom: 30px;

    @media (max-width: 900px) {
        text-align: center;
    }
    
    @media (max-width: 600px) {
        font-size: 14px;
        margin-bottom: 20px;
    }
`

const LinksGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;

    @media (max-width: 900px) {
        justify-content: center;
    }
`

const LinkItem = styled.a`
    padding: 15px 30px;
    background: #333;
    border-radius: 30px;

    @media (max-width:645px) {
        padding: 10px 20px;
        border-radius: 20px;
    }
`

const PortfolioLink = styled(LinkItem)`
    border: 3px solid #007CED;
`

const ContactLink = styled(LinkItem)`
    border: 3px solid #D5D5D5;
`
