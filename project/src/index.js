import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import { HomeReducer } from './reducers/HomeReducer.js';
import { IssueReducer } from './reducers/IssueReducer';
import { UserReducer } from './reducers/UserReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({home: HomeReducer, user: UserReducer}), applyMiddleware(thunk, logger));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
