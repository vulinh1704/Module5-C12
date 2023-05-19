import studentReducer from './students/studentSlice';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        students: studentReducer
    }
})

export default store;