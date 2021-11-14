import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import parts from "./source.js";


ReactDOM.render(
  <React.StrictMode>
        <App parts={parts} />
  </React.StrictMode>,
  document.getElementById('root')
);


