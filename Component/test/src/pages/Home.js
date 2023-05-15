import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Outlet} from 'react-router-dom';
export function Home() {
    return <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
}