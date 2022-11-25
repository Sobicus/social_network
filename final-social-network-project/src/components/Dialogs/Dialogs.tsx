import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {messagesPageType} from '../../redux/state';
import React from "react";

type DialogsType = {
    state: messagesPageType
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addNewMessage = () => {
        let text = newMessageElement.current?.value
        alert(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {props.state.dialogsData.map(el => <DialogItem id={el.id} name={el.name} avatar={el.avatar}
                                                               key={el.id}/>)}
            </div>
            <div className={style.messages}>
                {props.state.messageData.map(el => <Message message={el.message} key={el.id}/>)}
            </div>

            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addNewMessage}>Message</button>
            </div>

        </div>
    )
}