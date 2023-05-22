import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProduct} from "../../../services/productService";

export function List() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list;
    })

    useEffect(() => {
        dispatch(getProduct());
    }, [])
    return (
        <>
            <table border={1}>
                <thead>
                <tr key={0}>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Category</td>
                </tr>
                </thead>
                <tbody>
                {
                    products.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}$</td>
                                <td>{item.quantity}</td>
                                <td>{item.category.name}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </>
    )
}