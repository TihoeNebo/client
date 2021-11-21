import React from 'react';
import './App.css';
import PartList from './pages/PartList.js';
import ForumPage from './pages/ForumPage.js';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
    
    
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<PartList />} />
                    <Route exact path='/:forumURN' element={<ForumPage  />} />
                </Routes>
            </BrowserRouter>
        </main>
  );
}

export default App;
