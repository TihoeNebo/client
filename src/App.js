import React from 'react';
import './App.css';
import PartList from './pages/PartList.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    
    
    
    
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<PartList />} />
                </Routes>
            </BrowserRouter>
        </main>
  );
}

export default App;
