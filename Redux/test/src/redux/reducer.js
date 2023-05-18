const initialState = []
export const reducer = (currentState = initialState, action) => {
    if(action.type === 'GET_DATA') {
        return action.payload;
    }
    return currentState;
}
