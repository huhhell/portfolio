import styled from "styled-components";

interface Props {
    categories: string[],
    activeCategory: number,
    handleActiveCategory: (id: number) => void
}

export default function ProjectsListCategories({categories, activeCategory, handleActiveCategory}: Props) {

    return <Container>
        {categories.map((i, id) => id === activeCategory ?
            <ActiveCategory key={id}>{i}</ActiveCategory> :
            <Category key={id} onClick={() => handleActiveCategory(id)}>{i}</Category>)}
    </Container>
}

const Container = styled.ul`
    display: flex;
    align-items: center;
    gap: 50px;
    margin-bottom: 30px;
    
    @media(max-width: 645px) {
        gap: 20px;
        margin-bottom: 20px;
    }
`

const Category = styled.li`
    font-size: 18px;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.50);
`

const ActiveCategory = styled(Category)`
    color: #ffffff;
`

