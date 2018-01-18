import { combineReducers } from 'redux';
import * as types from '../actions/types';

const load = (state = [], action) => {
    switch (action.type) {
        case types.EMOTION_DATA_LOADED:
            return action.data;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    load
});

export default rootReducer;
