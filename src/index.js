import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

console.log(store)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementsByClassName('App')[0]
);


