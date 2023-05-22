import {createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../services/productsService";

const initialState = {
    list: []
}
const productsSlice = createSlice({
        name: 'products',
        initialState,
        extraReducers: builder => {
            builder.addCase(getProducts.fulfilled, (state, action) => {
                state.list = action.payload;
            })
        }
    }
)
export default productsSlice.reducer;