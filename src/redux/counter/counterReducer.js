import {INCREMENT,DECREMENT,RESET} from './counterTypes';

const INITIAL_STATE = {
    counter: 0
}

export default function counterReducer(state = INITIAL_STATE, action){
    //console.log("******* ESTADO Y ACCIÓN ********")
    //console.log(state, action)
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                counter: state.counter - 1
            }
        case RESET:
            return {
                counter: INITIAL_STATE.counter
            }
        default:
            return state
    }
  }