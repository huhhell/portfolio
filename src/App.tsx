import styled from "styled-components";
import Navigation from "./assets/components/Navigation/Navigation.tsx";
import Home from "./assets/components/Home/Home.tsx";
import Skills from "./assets/components/Skills/Skills.tsx";

function App() {

  return (
    <Container>
        <Navigation/>
        <Home/>
        <Skills/>
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

export default App
