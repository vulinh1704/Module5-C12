import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getStudents} from "./services/studentService";

function App() {
    const dispatch = useDispatch();
    const students = useSelector((state) => {
        console.log(state)
        return state;
    })
    useEffect(() => {
        dispatch(getStudents())
    }, [])
    return (
        <>
            {
                // students.map(item => (
                //     <>
                //         {/*<h1>{item.name}, {item.age}</h1>*/}
                //     </>
                // ))
            }

            {/*<button onClick={() => {*/}
            {/*    dispatch(getStudents())*/}
            {/*}}>Thêm mới*/}
            {/*</button>*/}
        </>
    );
}

export default App;
