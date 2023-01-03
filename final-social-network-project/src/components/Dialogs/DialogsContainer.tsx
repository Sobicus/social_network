import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {storeType} from '../../redux/store';
import React, {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsContainerType = {
    store: storeType
}

export const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().messagesPage

            const onSendMessageClick = () => {
                store.dispatch(sendMessageAC())
            }
            const onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyAC(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state}/>
        }
        }
    </StoreContext.Consumer>
}

