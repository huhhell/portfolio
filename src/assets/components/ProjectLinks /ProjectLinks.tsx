import githubImg from "../../img/links/github.svg";
import webImg from "../../img/links/web.svg";
import notionImg from "../../img/links/notion.svg";
import styled from "styled-components";
import {Tech} from "../../data/tech.ts";
import {ProjectLink} from "../../data/projects.ts";


interface Props {
    tech: Tech[],
    links: ProjectLink[],
}
export default function ProjectLinks({tech, links}: Props) {

    function getImg(source: string) {
        switch (source) {
            case 'GitHub':
                return githubImg
            case 'Website':
                return webImg
            case 'Notion':
                return notionImg
            default:
                return webImg
        }
    }

    return  <FlexCnt>
        <AdditionalInfoBlock>
            <AdditionalTitle>Технологии</AdditionalTitle>
            <List>
                {tech.map(i => <Item key={i.id}>
                    <ItemIcon src={i.img}/>
                    <ItemName>{i.name}</ItemName>
                </Item>)}
            </List>
        </AdditionalInfoBlock>
        <AdditionalInfoBlock>
            <AdditionalTitle>Ссылки</AdditionalTitle>
            <List>
                {links.map(i => <Item key={i.id}>
                    <ItemLink href={i.link}>
                        <ItemIcon src={getImg(i.name)}></ItemIcon>
                        <ItemName>{i.name}</ItemName>
                    </ItemLink>
                </Item>)}
            </List>
        </AdditionalInfoBlock>
    </FlexCnt>
}


const FlexCnt = styled.div`
    display: flex;
    gap: 20px;

`

const AdditionalInfoBlock = styled.div`
    flex: 0 0 50%;
`

const AdditionalTitle = styled.h4`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
        font-size: 24px;
        margin-bottom: 20px;
    }

    @media (max-width: 645px) {
        font-size: 20px;
        margin-bottom: 15px;
    }
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1000px) {
        gap: 10px;
    }

    @media (max-width: 645px) {
        flex-direction: row;
    }
`

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 1000px) {
        gap: 15px;
    }
`

const ItemLink = styled.a`
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 1000px) {
        gap: 15px;
    }
`

const ItemIcon = styled.img`
    width: 50px;
    height: auto;

    @media (max-width: 1000px) {
        width: 35px;
    }
`

const ItemName = styled.p`
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 1000px) {
        font-size: 18px;
    }

    @media (max-width: 645px) {
        display: none;
    }
`