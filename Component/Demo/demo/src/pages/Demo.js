import {Component} from "react";
import {Demo2} from "./Demo2";

export class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: 'Linh',
                    age: 30
                },
                {
                    name: 'Hung',
                    age: 24
                }
            ],
            inputName: '',
            inputAge: ''
        }
    }

    add = () => {
        this.setState({
            list: [...this.state.list, {name: this.state.inputName, age: this.state.inputAge}],
            inputName: '',
            inputAge: ''
        })
    }

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
                <input type={'text'} name={'inputName'} placeholder={'Name'} value={this.state.inputName} onChange={this.changeValue}/>
                <input type={'text'} name={'inputAge'} placeholder={'Age'} value={this.state.inputAge} onChange={this.changeValue}/>
                <button onClick={this.add}>Nhấn</button>
                {
                    this.state.list.map((item, index) => (
                        <h2 key={index}>{item.name}, {item.age}</h2>
                    ))
                }
            </>
        )
    }
}