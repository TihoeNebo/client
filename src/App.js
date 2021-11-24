import React, { useState } from 'react';
import './App.css';
import PartList from './pages/PartList.js';
import ForumPage from './pages/ForumPage.js';
import TopicPage from './pages/TopicPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './components/UserContext';
import HeadElems from './HeadElems';

function App() {
    
    const [context, setContext] = useState(false);
    return (
        <UserContext.Provider value={[context, setContext]}>
            <HeadElems />
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<PartList />} />
                        <Route exact path='/:forumURN' element={<ForumPage />} />
                        <Route exact path='/:forumURN/:topicId' element={<TopicPage />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </UserContext.Provider>
  );
}

export default App;
