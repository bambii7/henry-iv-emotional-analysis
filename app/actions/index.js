import * as types from './types';
import { store } from '../store/configureStore';

export function emotionDataLoadedAction(data) {
    const action = {
        type: types.EMOTION_DATA_LOADED,
        data: data
    };
    store.dispatch(action);
}
