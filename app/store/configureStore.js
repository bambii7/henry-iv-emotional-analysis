import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export const store = createStore(
    rootReducer,
    {},
    compose(
        DevTools.instrument()
    )
);
