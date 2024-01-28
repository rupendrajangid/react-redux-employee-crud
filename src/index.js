import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import employeeReducer from './reducers/employeeReducer';

const store = createStore(employeeReducer, applyMiddleware(thunk));

// Replace ReactDOM.render with createRoot().render
const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
