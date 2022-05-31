import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Heder/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import {postsDataType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemsPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageItemPropsType} from "./components/Dialogs/Message/Message";

type AppPropsType={
    postsData:Array<postsDataType>
    dialogsData:Array<DialogItemsPropsType>
    messagesData:Array<MessageItemPropsType>
}

const App:React.FC<AppPropsType>= (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="profile/*" element={<Profile postsData={props.postsData}/>}/>
                        <Route path="dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                        <Route path="news/*" element={<News/>}/>
                        <Route path="music/*" element={<Music/>}/>
                        <Route path="settings/*" element={<Settings text={"test new rout dom function"}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
