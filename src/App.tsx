import styled from "styled-components";
import Navigation from "./assets/components/Navigation/Navigation.tsx";
import Home from "./assets/components/Home/Home.tsx";

function App() {

  return (
    <Container>
      <Navigation />
        <Home />
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
    
`

export default App
