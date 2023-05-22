import {Link} from "react-router-dom";

export function Register() {
    return (
        <>
            <input type="text" name={'username'} placeholder={'User Name'}/>
            <input type="text" name={'password'} placeholder={'Password'}/>
            <Link to={'/login'}>Đăng nhập</Link>
            <button>Đăng kí</button>
        </>
    )
}