import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PartsPage from './components/PartsPage/PartsPage.js';
import ForumPage from './components/ForumPage/ForumPage.js';
import TopicPage from './components/TopicPage/TopicPage.js';
import Settings from './components/UserSettings/Settings.js';
import Header from './components/HeadElems/Header.js';
import sendRequest from './redux/sendRequest.js';


export default function App() {

    const request = useSelector(state => state.request);
    const dispatch = useDispatch();

    useEffect(async () => {
        const response = await sendRequest(request);

        setTimeout(() => dispatch(response), 1000);
    }, [request]);
    

    return (
        <BrowserRouter>
            <Header />
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


