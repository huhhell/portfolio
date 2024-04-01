import styled from "styled-components";
import Navigation from "./assets/components/Navigation/Navigation.tsx";
import {BrowserRouter} from "react-router-dom";
import Routes from "./assets/Routes/Routes.tsx";

// <Link to='products' className='header__shop'>Shop</Link>

function App() {

  return (
    <Container>
        <BrowserRouter>
            <Navigation/>
            <Routes />
        </BrowserRouter>
        {/*<Navigation/>*/}
        {/*<Home/>*/}
        {/*<Skills/>*/}
        {/*<LanguagesCnt>*/}
        {/*    <Title>Skills</Title>*/}
        {/*    <Languages/>*/}
        {/*</LanguagesCnt>*/}
    </Container>
  )
}


const Container = styled.div `
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background: #222;

    scroll-snap-type: y mandatory;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    & {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`

// todo вынести в отдельный компонент

// const Title = styled.h2`
//     font-size: 45px;
//     padding: 5vh 40px;
//     background: #252525;
//     border-top: 2px solid #333;
//     border-bottom: 2px solid #333;
//     margin-bottom: 40px;
//     letter-spacing: 2px;
//
//     @media (max-width: 645px) {
//         font-size: 30px;
//         padding: 3vh 40px;
//         margin-bottom: 20px;
//     }
// `
//
// const LanguagesCnt = styled.section`
//     display: none;
//     height: 100%;
//     scroll-snap-align: start;
//     padding: 15vh 0 0 0;
//
//
//     @media (max-width: 1000px) {
//         display: block;
//     }
//
//     @media (max-width: 645px) {
//         padding: 10vh 0 0 0;
//     }
//
// `

export default App
