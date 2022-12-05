import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {stateType, updateNewPostText} from "./redux/state";

type AppType = {
    state: stateType
    addNewPost: () => void
    updateNewPostText: (newText: string) => void
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Routes>
                    <Route path='/profile' element={<Profile
                        profilePage={props.state.profilePage}
                        addNewPost={props.addNewPost}
                        updateNewPostText={props.updateNewPostText}
                    />}
                    />
                    <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
