import {WRITE_MESSAGE} from './messageTypes'

export const writeMessage = (message="") =>{
    return {
        type: WRITE_MESSAGE,
        payload: message
    }
}