import styled from "styled-components";
import Navigation from "./assets/components/Navigation/Navigation.tsx";
import {BrowserRouter} from "react-router-dom";
import Routes from "./assets/Routes/Routes.tsx";
import {useState} from "react";




function App() {
    const [activeProjectId, setActiveProjectId] = useState(0);

    function openProject(projectId: number) {
        setActiveProjectId(projectId)
    }

  return (
    <Container>
        <BrowserRouter>
            <Navigation/>
            <Routes activeProject={activeProjectId} openProject={openProject}/>
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
