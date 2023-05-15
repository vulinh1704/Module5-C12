import {Component} from "react";
import Inside from "./inside";

export class Demo extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            isShow: true
        }
    }

    click = () => {
        console.log(this)
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.click}>Hello</button>
                {this.state.isShow && <Inside/>}
            </div>
        );
    }
}


export class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ConTent/>

            </div>
        )
    }
}

class Header extends Component {
    render() {
        {alert(1)}
        return (
            <div>
                <h1>Đây là Header</h1>
            </div>
        )
    }
}

class ConTent extends Component {
    render() {
        {alert(2)}
        return (
            <div>
                <h1>Đây là content của page </h1>
                <p>Nội dung : ....</p>
            </div>
        )
    }
}