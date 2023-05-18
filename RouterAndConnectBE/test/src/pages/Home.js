import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {Outlet} from 'react-router-dom';
import {useState} from "react";

export function Home(props) {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}


// const initValue = {counter: 0};
// const rootReducer = (state = initValue, action) => {
//     switch (action.type) {
//         case 'INCREMENT' :
//             // Không nên viết thế này
//             // state.value = state.value + 1;
//             // return state
//             // => mà viết như này :
//             return {
//                 ...state,
//                 value: state.value + 1
//             }
//         default:
//             return state;
//     }
//
// }
//
// //Action
// const INCREMENT = {
//     type: 'INCREMENT',
//     payload: 1
// }
//
// const incrementCreator = (data) => {
//     return {
//         type: 'INCREMENT',
//         payload: data
//     }
// }
//
// dispatch(incrementCreator(10));