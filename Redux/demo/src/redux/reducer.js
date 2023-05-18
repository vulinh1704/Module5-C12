const initialState = {
    students: []
}
export const studentReducer = (currentState = initialState, action) => {
    if (action.type === 'GET_STUDENTS') {
        let newState = {
            ...currentState,
            students: action.payload
        }
        return newState;
    }
    return currentState;
}