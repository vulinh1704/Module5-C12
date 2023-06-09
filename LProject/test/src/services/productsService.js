import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await axios.get('http://localhost:3001/products');
        return res.data;
    }
)