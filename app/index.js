import React from 'react';
import { render } from 'react-dom';
import { store, history } from './store/configureStore';
import Root from './containers/Root';

const div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
