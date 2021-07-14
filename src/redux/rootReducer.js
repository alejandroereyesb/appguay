import {combineReducers} from 'redux';
import counterReducer from './counter/counterReducer';
import messageReducer from './message/messageReducer';

const rootReducer = combineReducers({
    counterReducer,
    messageReducer
})

export default rootReducer;

