import {Component} from "react";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'Bánh mì',
                    price: 3000
                },
                {
                    name: 'Bánh cáy',
                    price: 2000
                }
            ],
            inputName: '',
            inputPrice: ''
        }
    }

    add = () => {
        this.setState(
            {
                products: [...this.state.products, {
                    name: this.state.inputName,
                    price: this.state.inputPrice
                }],
                inputName: '',
                inputPrice: ''
            }
        )
    }

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <>
                <input type="text" value={this.state.inputName} name={'inputName'} placeholder={'Name'}
                       onChange={(e) => {
                           this.changeValue(e)
                       }}/>
                <input type="text" value={this.state.inputPrice} name={'inputPrice'} placeholder={'Price'}
                       onChange={this.changeValue}/>
                <button onClick={this.add}>Add
                </button>
                {this.state.products.map((item, index) =>
                    (<h1 key={index}>Name: {item.name} | Price: {item.price} $</h1>)
                )}
            </>
        )
    }
}
