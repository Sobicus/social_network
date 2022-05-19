import React from "react";
import './App.css';
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music"
import Setting from "./components/Settings/Setting";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                                                                      state={props.state.dialogsPage}/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Setting/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
