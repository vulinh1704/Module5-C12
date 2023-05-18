import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./redux/action";

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
                dispatch(getData());
            }}>Click</button>
        </>
    );
}

export default App;
