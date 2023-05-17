import {useEffect, useState} from "react";
import axios from 'axios'
import {Link, useLocation} from "react-router-dom";

export function List() {
    const [students, setStudents] = useState([]);
    const {state} = useLocation();
    const [isLoad, setIsLoad] = useState(true);
    console.log(state);
    useEffect(() => {
        axios.get('http://localhost:3001/students').then((res) => {
            setStudents(res.data);
            setIsLoad(false);
        })
    }, [])
    return (
        <>
            {
                isLoad ? <>Loading......</> :
                    <>
                        <table border={1}>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Status</td>
                                <td colSpan={2}>Action</td>
                            </tr>
                            {
                                students.map(item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.action}</td>
                                        <td><Link to={`/home/edit/${item.id}`}>Edit</Link></td>
                                        <td>Delete</td>
                                    </tr>
                                ))
                            }

                        </table>
                    </>
            }

        </>
    )
}