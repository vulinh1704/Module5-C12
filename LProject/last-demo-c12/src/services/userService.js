import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import apiCustom from "./apiCustom";

export const login = createAsyncThunk(
    'user/login',
    async (user) => {
        const res = await apiCustom.post('auth/login', user);
        return res.data;
    })
