import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";



export const getStudents = createAsyncThunk(
    'students/getStudents',
    async () => {
        let res = await axios.get('http://localhost:3001/students')
        return res.data;
    }
)

export const addStudent = createAsyncThunk(
    'students/addStudent',
    async (student) => {
        let res = await axios.post('http://localhost:3001/students', student);
        return student;
    }
)