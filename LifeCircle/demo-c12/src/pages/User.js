import {Component} from "react";

const users = [
    {
        name: 'Linh',
        age: 12
    },
    {
        name: 'Linh2',
        age: 24
    }
]

export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        console.log('1. Constructor')
    }

    componentDidMount = () => {
        this.getUsers();
        console.log('3. componentDidMount')
    }

    componentDidUpdate = () => {
        console.log('4. componentDidUpdate')
    }

    componentWillUnmount = () => {
        console.log('5. componentWillUnmount')
    }

    getUsers = () => {

        this.setState({users: users});
    }

    render() {
        console.log('2. Render')
        const {users} = this.state;
        return (
            <>
                <>
                    <h1>Vòng đời component</h1>
                    <div>
                        {
                            users && users.map((item, index) => (
                                <h1 key={index}>{item.name} | {item.age}</h1>
                            ))
                        }
                    </div>
                    <button onClick={this.getUsers}>Click</button>
                </>
            </>

        );
    }
}