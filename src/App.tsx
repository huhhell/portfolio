import styled from "styled-components";
import Navigation from "./assets/components/Navigation/Navigation.tsx";
import {BrowserRouter} from "react-router-dom";
import Routes from "./assets/Routes/Routes.tsx";

// <Link to='products' className='header__shop'>Shop</Link>

// todo fix bug when refresh page state is gone but pages didnt change to initial in nav
function App() {

  return (
    <Container>
        <BrowserRouter>
            <Navigation/>
            <Routes />
        </BrowserRouter>
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
