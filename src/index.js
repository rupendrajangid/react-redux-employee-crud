import React from "react"; // Importing the React library
import ReactDOM from "react-dom/client"; // Importing the ReactDOM modules
import { Provider } from "react-redux"; // Importing Provider function from Redux
import { createStore, applyMiddleware } from "redux"; // Importing createStore function from Redux
import { thunk } from "redux-thunk"; // Importing thunk middleware for handling asynchronous actions in Redux
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS for styling
import App from "./App"; // Importing the main App component
import employeeReducer from "./reducers/employeeReducer"; // Importing the employeeReducer

// Creating a Redux store with the employeeReducer and applying the thunk middleware
const store = createStore(employeeReducer, applyMiddleware(thunk));

// Getting the root element from the HTML document
const root = document.getElementById("root");

// Creating a React root using createRoot() method from ReactDOM
const reactRoot = ReactDOM.createRoot(root);

// Rendering the App component wrapped in the Redux Provider to connect it to the store
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
