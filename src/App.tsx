import styled from "styled-components";
import Navigation from "./assets/Pages/Navigation/Navigation.tsx";
import {BrowserRouter} from "react-router-dom";
import Routes from "./assets/Routes/Routes.tsx";
import {useState} from "react";

function App() {
    const [activeProjectId, setActiveProjectId] = useState(() => {
        const savedActiveProjectId = localStorage.getItem('activeProjectId');
        return savedActiveProjectId !== null ? parseInt(savedActiveProjectId) : 0;
    });
    const [isScrollDisabled, setIsScrollDisabled] = useState(false);




    function toggleScroll() {
        setIsScrollDisabled(!isScrollDisabled)
    }

    function openProject(projectId: number) {
        setActiveProjectId(projectId)
    }

  return (
    <Container $isScrollDisabled={isScrollDisabled}>
        <BrowserRouter>
            <Navigation toggleScroll={toggleScroll}/>
            <Routes activeProject={activeProjectId} openProject={openProject} toggleScroll={toggleScroll}/>
        </BrowserRouter>
    </Container>
  )
}


const Container = styled.div<{ $isScrollDisabled?: boolean; }>`
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background: #222;
    
    overflow: ${props => props.$isScrollDisabled ? 'hidden' : ''};
`

export default App
