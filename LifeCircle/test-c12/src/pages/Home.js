import {useEffect, useState} from "react";

const listUser = [
    {
        id: 1,
        name: 'Linh'
    },
    {
        id: 2,
        name: 'Hiếu'
    }
]

export function Home(props) {
    const [users, setUsers] = useState([]);

    let [id, setId] = useState('');
    let [name, setName] = useState('');

    useEffect(() => {
        setUsers(listUser);
    }, [])

    const add = () => {
        let user = {
            id : id,
            name: name
        }
        let newUser = [...users];
        newUser.push(user);
        setUsers(newUser);
        setId('');
        setName('');
    }
    return (
        <>
            <h1>Hello</h1>
            <input value={id} onChange={(e) => {
                setId(e.target.value)
            }}/>
            <input value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <button onClick={add}>Add</button>
            {
                users.map(item => (
                    <div key={item.id}>
                        <p>{item.id}, {item.name}</p>
                    </div>
                ))
            }
        </>

    )
}