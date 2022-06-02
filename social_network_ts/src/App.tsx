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
import {stateType} from "./redux/state";

type AppPropsType={
    state:stateType
    // postsData:Array<postsDataType>
    // dialogsData:Array<DialogItemsPropsType>
    // messagesData:Array<MessageItemPropsType>
}

const App:React.FC<AppPropsType>= (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="profile/*" element={<Profile postsData={props.state.profilePage.postsData}/>}/>
                        <Route path="dialogs/*" element={<Dialogs dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData}/>}/>
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
