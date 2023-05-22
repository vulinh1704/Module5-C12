import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
export function Login() {
    const navigate = useNavigate();
    const login = () => {
        navigate('/home')
    }
    return (
        <>
            <input type="text" name={'username'} placeholder={'User Name'}/>
            <input type="text" name={'password'} placeholder={'Password'}/>
            <Link to={'/register'}>Đăng kí</Link>
            <button onClick={login}>Đăng nhập</button>
        </>
    )
}