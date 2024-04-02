import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home.tsx";
import Skills from "../Pages/Skills/Skills.tsx";
import Portfolio from "../Pages/Portfolio/Portfolio.tsx";


export default () => {
    return <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        {/*<Route path='/contact' element={} />*/}
    </Routes>
}