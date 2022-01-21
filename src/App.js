import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import PartsPage from './pages/PartsPage.js';
import ForumPage from './pages/ForumPage.js';
import TopicPage from './pages/TopicPage.js';
import Settings from './pages/Settings.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeadElems from './HeadElems';
import sendRequest from './redux/sendRequest.js';


function App() {

    const request = useSelector(state => state.request);
    const dispatch = useDispatch();

    useEffect(() => {
        const response = sendRequest(request);

        dispatch(response);
    }, [request]);
    

    return (
            <BrowserRouter>
            <HeadElems />
                <main>
                    <Routes>
                        <Route exact path='/' element={<PartsPage />} />
                        <Route exact path='/settings' element={<Settings />} />
                        <Route exact path='/:forumURN' element={<ForumPage />} />
                        <Route exact path='/:forumURN/:topicId' element={<TopicPage />} />
                    </Routes>
                </main>
            </BrowserRouter>
  );
}

export default App;
