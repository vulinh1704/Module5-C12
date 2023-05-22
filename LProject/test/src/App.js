import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/users/Login";
import {Register} from "./pages/users/Register";
import Home from "./pages/home/Home";
import {List} from "./pages/home/products/List";
import {Add} from "./pages/home/products/Add";

function App() {
    return (
        <>
            <Routes>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<List/>}/>
                    <Route path={'add-product'} element={<Add/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
