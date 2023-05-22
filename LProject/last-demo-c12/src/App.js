import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/user/Login";
import {Register} from "./pages/user/Register";
import {Home} from "./pages/home/Home";
import {List} from "./pages/home/products/List";
import {Create} from "./pages/home/products/Create";
import {useSelector} from "react-redux";

function App() {
    const user = useSelector(({user}) => {
        return user.currentUser;
    })
    return (
        <>
            <Routes>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                {
                    user ?
                        <>
                            <Route path={'home'} element={<Home/>}>
                                <Route path={''} element={<List/>}/>
                                <Route path={'create'} element={<Create/>}/>
                            </Route>
                            <Route path="*" element={<Navigate to="home"/>}/>
                        </> :
                        <>
                            <Route path="*" element={<Navigate to="/login"/>}/>
                        </>
                }
            </Routes>
        </>
    );
}

export default App;
