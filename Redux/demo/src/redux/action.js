import axios from "axios";


export const getStudents = () => {
    return async (dispatch) => {
        let res = await axios.get('http://localhost:3001/students')
        dispatch({
            type: 'GET_STUDENTS',
            payload: res.data
        })
    }
}