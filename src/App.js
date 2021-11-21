import React from 'react';
import './App.css';
import PartList from './pages/PartList.js';
import ForumPage from './pages/ForumPage.js';
//import TopicPage from './pages/TopicPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    //<Route exact path='/:forumURN/:topicId' element={<TopicPage />} />
    
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<PartList />} />
                    <Route exact path='/:forumURN' element={<ForumPage />} />
                    
                </Routes>
            </BrowserRouter>
        </main>
  );
}

export default App;
