import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { productReducer, checkoutReducer } from './modules/reducers/reducers';

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        productReducer,
        checkoutReducer
    }),
    applyMiddleware(logger)
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));