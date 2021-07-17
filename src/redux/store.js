import { createStore } from 'redux'

const initState = {
    count: 0
}

const reducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case 'increase':
            console.log('1');
            return {
                count: state.count + action.payload
            }
        case 'decrease':
            console.log('2');
            return {
                count: state.count - action.payload
            }
        default:
            console.log('3');
            return state;
    }
}
export const store = createStore(reducer);