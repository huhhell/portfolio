import {ProjectImage} from "../../data/images.ts";
import styled from "styled-components";
import closeImg from '../../img/nav/close.svg';

interface Props {
    image: ProjectImage;
    closeImage: () => void;
}

export default function OpenedImage({image, closeImage}: Props) {

    return <Container>
        <CloseBtn onClick={closeImage}>
            <CloseBtnImg src={closeImg}/>
        </CloseBtn>
        <Img src={image.img} alt={image.alt}/>
    </Container>
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    padding: 40px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media(max-width: 645px) {
        padding: 20px;
    }
`

const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    background: transparent;
`

const CloseBtnImg = styled.img`
    width: 50px;
    height: auto;
    max-height: 80vh;
    
    @media(max-width: 645px) {
        width: 30px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
