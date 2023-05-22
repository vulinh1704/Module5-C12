import {configureStore} from "@reduxjs/toolkit";
import productReduce from "./products/productsSlice";

const store = configureStore({
    reducer: {
        products: productReduce
    }
})
export default store