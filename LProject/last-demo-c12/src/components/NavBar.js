import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function NavBar() {
    const user = useSelector(({user}) => {
        return user.currentUser;
    })
    return (
        <>
            {
                user &&
                <>
                    <Link to={'/home'}>Trang chủ</Link> |
                    <Link to={'/home/create'}>Them moi</Link> |
                    <span>{user.username}</span>
                    <hr/>
                </>
            }

        </>
    )
}