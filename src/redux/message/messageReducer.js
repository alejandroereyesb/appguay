import {WRITE_MESSAGE} from './messageTypes';

const INITIAL_STATE = {
    message: ""
}

export default function messageReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case WRITE_MESSAGE:
            return {
                ...state,
                message:action.payload
            }
        default:
            return state
    }
}