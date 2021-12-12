import React from 'react';
import './App.css';
import PartList from './pages/PartList.js';
import ForumPage from './pages/ForumPage.js';
import TopicPage from './pages/TopicPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import HeadElems from './HeadElems';

function App() {
    
    return (
        <UserProvider>
                <BrowserRouter>
                <HeadElems />
                <main>
                    <Routes>
                        <Route exact path='/' element={<PartList />} />
                        <Route exact path='/:forumURN' element={<ForumPage />} />
                        <Route exact path='/:forumURN/:topicId' element={<TopicPage />} />
                    </Routes>
                </main>
                </BrowserRouter>   
        </UserProvider>
  );
}

export default App;
