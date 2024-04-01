import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home.tsx";


export default () => {
    return <Routes>
        <Route path='/' element={<Home />}/>
        {/*<Route path='/products' element={} />*/}
        {/*<Route path='/subscription' element={} />*/}
    </Routes>
}