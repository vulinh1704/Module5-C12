import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getStudents} from "./redux/action";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();
    const students = useSelector(({students}) => {
        console.log(students)
        return students;
    })
    useEffect(() => {
        dispatch(getStudents())
    }, [])
    return (
        <>
            {
                students.map(item => (
                    <>
                        {/*<h1>{item.name}, {item.age}</h1>*/}
                    </>
                ))
            }

            {/*<button onClick={() => {*/}
            {/*    dispatch(getStudents())*/}
            {/*}}>Thêm mới*/}
            {/*</button>*/}
        </>
    );
}

export default App;
