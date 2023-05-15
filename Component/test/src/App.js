import './App.css';
import {Route, Routes} from "react-router-dom";
import {Admin} from "./pages/students/Admin";
import {Home} from "./pages/Home";
import {ListStudent} from "./pages/students/ListStudent";
import {CreateStudent} from "./pages/students/CreateStudent";
import {Edit} from "./pages/students/Edit";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'/'} element={<ListStudent/>}/>
                    <Route path={'/create'} element={<CreateStudent/>}/>
                    <Route path={'/edit/:id'} element={<Edit/>}/>
                </Route>
                <Route path={'/admin'} element={<Admin/>}>Admin</Route>
            </Routes>
        </>
    );
}

export default App;
