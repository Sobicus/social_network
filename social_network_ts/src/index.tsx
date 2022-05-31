import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {postsDataType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemsPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageItemPropsType} from "./components/Dialogs/Message/Message";

let postsData: Array<postsDataType> = [
    {id:1, message:'Hello my friend', likeCount:5},
    {id:2, message:'It my first types', likeCount:5},
    {id:3, message:'Go go go fly', likeCount:5},
]

let dialogsData: Array<DialogItemsPropsType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]
let messagesData: Array<MessageItemPropsType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your going'},
    {id: 3, message: 'Yo'},
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
