import styled from "styled-components";
import mailImg from '../../img/contact/mail.svg'
import phoneImg from '../../img/contact/phone.svg'
import tgImg from '../../img/contact/tg.svg'
import hhImg from '../../img/contact/hh.svg'
import locationImg from '../../img/contact/location.svg'
import githubImg from '../../img/contact/github.svg'
import cvImg from '../../img/contact/cv.svg'
import avatarImg from '../../img/main/avatar.jpg'

export default function Contact() {
    return <Container>
        <AvatarCnt>
            <AvatarImg src={avatarImg}/>
        </AvatarCnt>

        <Info>
            <Item>
                <ItemLink href='https://github.com/huhhell' target='_blank'>
                    <ItemIcon src={githubImg}/>
                    <ItemName>huhhell</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink href='mailto:huhhell@mail.ru' target='_blank'>
                    <ItemIcon src={mailImg}/>
                    <ItemName>huhhell@mail.ru</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink>
                    <ItemIcon src={phoneImg}/>
                    <ItemName>+7 (913) 004 13 15</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink href='https://t.me/huhhell' target='_blank'>
                    <ItemIcon src={tgImg}/>
                    <ItemName>@huhhell</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink href='https://novosibirsk.hh.ru/resume/3377fc2fff0d0c33aa0039ed1f6d6a66743358' target='_blank'>
                    <ItemIcon src={hhImg}/>
                    <ItemName>Head Hunter</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink href='https://www.google.com/maps/place/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA,+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@54.9698656,82.7846019,11z/data=!3m1!4b1!4m6!3m5!1s0x42dfe5e190cc4d97:0x9b3a0673e1d3e985!8m2!3d54.9832693!4d82.8963831!16zL20vMGd6eWI?entry=ttu' target='_blank'>
                    <ItemIcon src={locationImg}/>
                    <ItemName>Novosibirsk, Russia</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink href='https://indigo-pea-cb9.notion.site/CV-dfb091b3dbd94135ada284ba9ec93d49?pvs=25' target='_blank'>
                    <ItemIcon src={cvImg}/>
                    <ItemName>CV</ItemName>
                </ItemLink>
            </Item>
        </Info>
    </Container>
}

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    padding: 40px;
    
    @media(max-width: 645px) {
        flex-direction: column;
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
    overflow: hidden;

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
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    @media(max-width: 900px) {
        gap: 10px;
    }
`

const Item = styled.div``

const ItemIcon = styled.img`
    width: 40px;
    height: auto;
    
    @media(max-width: 900px) {
        width: 30px;
        height: auto;
    }
`

const ItemName = styled.p`
    font-size: 24px;
    
    @media(max-width: 900px) {
        font-size: 20px;
    }
`

const ItemLink = styled.a`
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    color: #ffffff;
`
