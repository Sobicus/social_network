import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {storeType} from '../../redux/state';
import React, {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';

type DialogsType = {
    store:storeType
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    let state = props.store.getState().messagesPage

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let newMessageBody = props.store._state.messagesPage.newMessageBody


    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {state.dialogsData.map(el => <DialogItem id={el.id} name={el.name} avatar={el.avatar}
                                                               key={el.id}/>)}
            </div>
            <div className={style.messages}>
                {state.messageData.map(el => <Message message={el.message} key={el.id}/>)}
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            ref={newMessageElement}
                            placeholder='Enter your message'
                            onChange={onNewMessageChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>


        </div>
    )
}