import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <h1>
                <Link to={'/'}>Home</Link>
                |
                <Link to={'/create'}>Create</Link>
            </h1>
            <hr/>
        </>
    )
}