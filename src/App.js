import React, { useState } from 'react';
import './App.css';
import PartList from './pages/PartList.js';
import ForumPage from './pages/ForumPage.js';
import TopicPage from './pages/TopicPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './components/UserContext';
import HeadElems from './HeadElems';

function App() {
    const userData = {
        name: null,
        level: 0,
        switches: {
            createForumButton: false,
            createTopicButton: false,
            createPostButton: false
        }
    }
    const [context, setContext] = useState(userData);
    return (
        <UserContext.Provider value={[context, setContext]}>
            
            <main>
                <BrowserRouter>
                    <HeadElems />
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
