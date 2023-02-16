import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Login } from './components/Login/Login';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

type AppType = {}

const App: React.FC<AppType> = (props) => {

    return (
        <div className='app_wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Routes>
                    <Route path='*' element={<ProfileContainer/>}/>
                    <Route path='/profile/' element={<ProfileContainer/>}/>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route
                        path='/dialogs/'
                        element={<DialogsContainer/>}
                    />
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
function Dispatch(arg0: (dispatch: import("redux").Dispatch<import("redux").AnyAction>) => void) {
    throw new Error('Function not implemented.');
}

