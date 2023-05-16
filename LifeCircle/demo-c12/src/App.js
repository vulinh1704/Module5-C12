import './App.css';
import {User} from "./pages/User";
import {useState} from "react";


function App() {
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <button onClick={() => {setIsShow(!isShow)}}>Life</button>
            {
                isShow && <User/>
            }

        </>
    );
}

export default App;
