import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {state} from './redux/state'

// export type postsDataType = {
//     id: string
//     message: string
//     likesCounter: number
// }
// let postsData: Array<postsDataType> = [
//     {id: '1', message: 'It`s my first post', likesCounter: 1},
//     {id: '2', message: 'Hi, how are you?', likesCounter: 5},
//     {id: '3', message: 'GO GO GO?', likesCounter: 7},
//     {id: '4', message: 'Test props', likesCounter: 13},
// ]
// export type dialogsDataType = {
//     id: string
//     name: string
// }
// let dialogsData: Array<dialogsDataType> = [
//     {id: '1', name: 'Max'},
//     {id: '2', name: 'Alina'},
//     {id: '3', name: 'Vika'},
//     {id: '4', name: 'Lubov'},
//     {id: '5', name: 'Anatoliy'},
// ]
// export type messageDataType = {
//     id: string
//     message: string
// }
// let messageData: Array<messageDataType> = [
//     {id: '1', message: 'Hi'},
//     {id: '1', message: 'How are you?'},
//     {id: '1', message: 'Good, and you?'},
// ]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App appState={state}/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
