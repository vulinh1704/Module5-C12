const initState = { //aa
    counter: 0
}


const reducer = (state = initState, action) => { // setState  11
    if (action.type === 'INCREMENT') {
        let newState = {...state};
        newState.counter = newState.counter + action.payload; //bb
        return newState; //bb
    } else if (action.type === 'TANG') {
        let newState = {...state};
        newState.counter = newState.counter + action.payload;
        return newState; //dd
    } else {
        return state;
    }
}

//Store
const store = createStore(reducer);


//Action
const INCREMENT = {
    type: 'INCREMENT',
    payload: 1
}


// Action creator
const tang = (data) => {
    return {
        type: 'TANG',
        payload: data
    }
}


// View
function Home() {
    const state = selectFromStore(store); //aa => cc => dd
    return (
        <>{state.counter}
            <button onClick={() => {
                dispatch(INCREMENT)
            }}>Change state
            </button>

            <button onClick={() => {
                dispatch(tang(10))
            }}>Tăng 10
            </button>

            <button onClick={() => {
                dispatch(tang(20))
            }}>Tăng 20
            </button>

        </>
    )
}
