import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import apiCustom from "./apiCustom";

export const getProduct = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await apiCustom.get('products');
        return res.data;
    }
)