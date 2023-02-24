import React, {FC} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import ProfileContainer, {withRouter} from './components/Profile/ProfileContainer';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from './components/Login/Login';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {connect} from "react-redux";
import {initializedAppTC} from "./redux/app-reducer";
import {RootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {compose} from "redux";

type AppType = {
    initializedApp: () => void
    initialized: boolean
}

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized){
           return <Preloader/>
        }

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
}

const mapStateToProps = (state: RootStateType) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose<FC>(connect(mapStateToProps, {initializedApp: initializedAppTC}))(App)


// const App: React.FC<AppType> = (props) => {
//
//     return (
//         <div className='app_wrapper'>
//             <HeaderContainer/>
//             <Navbar/>
//             <div className='app_wrapper_content'>
//                 <Routes>
//                     <Route path='*' element={<ProfileContainer/>}/>
//                     <Route path='/profile/' element={<ProfileContainer/>}/>
//                     <Route path='/profile/:userId' element={<ProfileContainer/>}/>
//                     <Route
//                         path='/dialogs/'
//                         element={<DialogsContainer/>}
//                     />
//                     <Route path='/users' element={<UsersContainer/>}/>
//                     <Route path='/news' element={<News/>}/>
//                     <Route path='/music' element={<Music/>}/>
//                     <Route path='/settings' element={<Settings/>}/>
//                     <Route path='/login' element={<Login/>}/>
//                 </Routes>
//             </div>
//         </div>
//     );
// }


// function Dispatch(arg0: (dispatch: import("redux").Dispatch<import("redux").AnyAction>) => void) {
//     throw new Error('Function not implemented.');
// }

