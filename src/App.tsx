import styled from "styled-components";
import Navigation from "./assets/Pages/Navigation/Navigation.tsx";
import {BrowserRouter} from "react-router-dom";
import Routes from "./assets/Routes/Routes.tsx";
import {useState} from "react";

function App() {
    const [activeProjectId, setActiveProjectId] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    function openProject(projectId: number) {
        setActiveProjectId(projectId)
    }

  return (
    <Container $isMenuOpen={isMenuOpen}>
        <BrowserRouter>
            <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
            <Routes activeProject={activeProjectId} openProject={openProject}/>
        </BrowserRouter>
    </Container>
  )
}


const Container = styled.div<{ $isMenuOpen?: boolean; }>`
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background: #222;
    
    overflow: ${props => props.$isMenuOpen ? 'hidden' : ''};
`

export default App
