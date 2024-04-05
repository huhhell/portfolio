import {ProjectImage} from "../../data/images.ts";
import styled from "styled-components";
import {useState} from "react";
import OpenedImage from "../OpenedImage/OpenedImage.tsx";

interface Props {
    images: ProjectImage[],
}

export default function ProjectGallery({images}: Props) {
    const [activeImgId, setActiveImgId] = useState(0);
    const [isImgOpen, setIsImageOpen] = useState(false);

    function handleChooseImg(id: number) {
        setActiveImgId(id)
    }

    function toggleImg() {
        setIsImageOpen(!isImgOpen)
    }

    return <Container>
        <ImgCnt>
            <MainImg src={images[activeImgId].img} onClick={toggleImg}/>
        </ImgCnt>
        <DotsCnt>
            {images.map(i => i.id === activeImgId ?
                <DotItemSelected key={i.id}></DotItemSelected> :
                <DotItem onClick={() => handleChooseImg(i.id)} key={i.id}></DotItem>)}
        </DotsCnt>
        {isImgOpen ? <OpenedImage image={images[activeImgId]} closeImage={toggleImg}/> : <></>}
    </Container>
}

const Container = styled.div`
    align-self: start;
    flex: 0 1 50%;

    @media (max-width: 1000px) {
        flex: 0 1 70%;
    }

    @media (max-width: 645px) {
        flex: 0 0 100%;
        align-self: stretch;
        margin-bottom: 30px;
    }
`

const ImgCnt = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 5/3;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 20px;
`

const MainImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`

const DotsCnt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const DotItem = styled.button`
    width: 15px;
    height: 15px;
    background: transparent;
    border: 2px solid #444;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
`

const DotItemSelected = styled(DotItem)`
    background: #ffffff;
    border: none;
`
