import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../../../services/productsService";

export function List() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        console.log(products.list);
        return products.list;
    })

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <>
            <table border={1}>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Category</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Bánh mì</td>
                    <td>100$</td>
                    <td>Bánh</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Bánh mì</td>
                    <td>100$</td>
                    <td>Bánh</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Bánh mì</td>
                    <td>100$</td>
                    <td>Bánh</td>
                </tr>
            </table>
        </>
    )
}