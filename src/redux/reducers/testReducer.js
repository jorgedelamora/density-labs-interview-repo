
const initialState = {
    test: 'the state is the initial state'
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
            return {...action.payload}
        default:
            return state;
    }
}

export default testReducer


