import styled from "styled-components";
import Project from "../../data/projects.ts";
import githubImg from '../../img/links/github.svg'
import webImg from '../../img/links/web.svg'
import notionImg from '../../img/links/notion.svg'

interface Props {
    project: Project
}

export default function ProjectInfo({project}: Props) {
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

    return <Info>
        <Title>{project.name}</Title>
        <Text>{project.description}</Text>
        <FlexCnt>
            <AdditionalInfoBlock>
                <AdditionalTitle>Технологии</AdditionalTitle>
                <List>
                    {project.tech.map(i => <Item key={i.id}>
                        <ItemIcon src={i.img}/>
                        <ItemName>{i.name}</ItemName>
                    </Item>)}
                </List>
            </AdditionalInfoBlock>
            <AdditionalInfoBlock>
                <AdditionalTitle>Ссылки</AdditionalTitle>
                <List>
                    {project.links.map(i => <Item key={i.id}>
                        <ItemLink href={i.link}>
                            <ItemIcon src={getImg(i.name)}></ItemIcon>
                            <ItemName>{i.name}</ItemName>
                        </ItemLink>
                    </Item>)}
                </List>
            </AdditionalInfoBlock>
        </FlexCnt>
    </Info>
}

const Info = styled.div`
    flex: 0 0 50%;
`

const Title = styled.h1`
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 40px;
`

const Text = styled.p`
    font-size: 20px;
    margin-bottom: 50px;
`

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
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
`

const ItemLink = styled.a`
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 30px;
`

const ItemIcon = styled.img``

const ItemName = styled.p`
    font-size: 24px;
    font-weight: 500;
`
