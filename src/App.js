import React from 'react';
import './App.css';
import Part from './components/part.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App({ parts }) {
    
    
    const partList = parts.map( data => <Part part={data} /> );
    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={
                    <div className="parts">
                        {partList}
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
