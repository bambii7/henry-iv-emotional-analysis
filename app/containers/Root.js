import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import DevTools from './DevTools';
import Henry from './Henry';

export default function Root({store}) {
    return (
        <Provider store={store}>
            <div>
                <Henry />
                <DevTools />
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
