import axios from "axios";

export const getData = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/students')
        dispatch({
            type: 'GET_DATA',
            payload: res.data
        })
    }
}