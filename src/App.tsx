import styled from "styled-components";
import Navigation from "./assets/components/Navigation/Navigation.tsx";

function App() {

  return (
    <Container>
      <Navigation />
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
    font-family: Poppins, sans-serif;
    color: #fff;
`

export default App
