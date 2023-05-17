import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios'

export function List() {
    const {state} = useLocation();
    const [students, setStudents] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3001/students').then(res => {
            setStudents(res.data);
            setLoad(false);
        })
    }, [])
    return (
        <>
            {
                !load ? <table border={1}>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Status</td>
                        <td colSpan={2}>Action</td>
                    </tr>
                    {
                        students.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.action}</td>
                                <td><Link>Edit</Link></td>
                                <td><Link>Delete</Link></td>
                            </tr>
                        ))
                    }
                </table> : <>Loading....</>
            }

        </>
    )
}