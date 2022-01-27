import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import App from './App';

import { getUsers } from './redux/actions/users.actions';

// Devtools

import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.dispatch(getUsers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
