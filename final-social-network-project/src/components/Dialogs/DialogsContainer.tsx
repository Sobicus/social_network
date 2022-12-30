import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {storeType} from '../../redux/store';
import React, {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
    store: storeType
}

export const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    let state = props.store.getState().messagesPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state}/>
    )
}