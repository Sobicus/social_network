import React from 'react';
import './index.css';
import {state, subscribe} from './redux/state'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {stateType, updateNewPostText} from './redux/state'
import {addNewPost} from './redux/state'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree= (state: stateType) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addNewPost={addNewPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();