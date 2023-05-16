import {Component} from "react";

const users = [
    {
        id: 1,
        name: 'Linh',
        class: 'c12'
    },
    {
        id: 2,
        name: 'Hiếu',
        class: 'c09'
    }
]

export class Users extends Component {
    constructor(props) {
        console.log("1. Constructor")
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount = () => {
        console.log('3. componentDidMount')
        this.getUser();
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log('4. -------> componentDidUpdate')
    }

    componentWillUnmount = () => {
        console.log('5. Die')
    }

    getUser = () => {
        this.setState({users: users})
    }


    render() {
        console.log("2. Render")
        return <>
            <h1>Hello</h1>
            {
                this.state.users.map(item => (
                    <div key={item.id}>
                        <p>{item.id}, {item.name},{item.class}</p>
                    </div>
                ))
            }
            <button onClick={() => {
                this.getUser();
            }
            }>Update State
            </button>
        </>
    }
}