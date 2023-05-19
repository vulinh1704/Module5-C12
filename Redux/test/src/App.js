import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getStudents} from "./services/studentService";

function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        console.log(state)
        return state;
    })
    return (
        <>
            <h1>Hahah</h1>
            {/*<h1>{state.name} , {state.age}</h1>*/}
            <button onClick={() => {
                dispatch(getStudents());
            }}>Click</button>
        </>
    );
}

export default App;
