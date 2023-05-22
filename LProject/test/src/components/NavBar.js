import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <>
            <h3>Đây là navbar</h3>
            <Link to={''}>Home</Link> |
            <Link to={'add-product'}>Add</Link>
        </>
    )
}