import styled from "styled-components";
import mailImg from '../../img/contact/mail.svg'
import phoneImg from '../../img/contact/phone.svg'
import tgImg from '../../img/contact/tg.svg'
import hhImg from '../../img/contact/hh.svg'
import locationImg from '../../img/contact/location.svg'

export default function Contact() {
    return <Container>
        <AvatarCnt>
            <AvatarImg />
        </AvatarCnt>

        <Info>
            <Item>
                <ItemLink>
                    <ItemIcon src={mailImg}/>
                    <ItemName>vikalited@mail.ru</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink>
                    <ItemIcon src={phoneImg}/>
                    <ItemName>+79130041315</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink>
                    <ItemIcon src={tgImg}/>
                    <ItemName>@huhhell</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink>
                    <ItemIcon src={hhImg}/>
                    <ItemName>Head Hunter</ItemName>
                </ItemLink>
            </Item>
            <Item>
                <ItemLink>
                    <ItemIcon src={locationImg}/>
                    <ItemName>Novosibirsk, Russia</ItemName>
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
display: flex;
    flex-direction: column;
    gap: 30px;
`

const Item = styled.div``

const ItemIcon = styled.img`
    width: 40px;
    height: auto;
`

const ItemName = styled.p`
    font-size: 24px;
`

const ItemLink = styled.a`
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
`
