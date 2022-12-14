import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, stateType, storeType} from "./redux/state";

type AppType = {
    state: stateType
    dispatch: (action:ActionsType) => void
    store:storeType
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Routes>
                    <Route path='/profile' element={
                        <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}/>}
                    />
                    <Route
                        path='/dialogs/*'
                        element={<Dialogs
                            store={props.store}
                        />}
                    />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
