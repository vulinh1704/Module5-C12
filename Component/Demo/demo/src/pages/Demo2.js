import {Component} from "react";

export class Demo2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>
                    Đây là {this.props.a}
                </h1>
            </>
        )
    }
}