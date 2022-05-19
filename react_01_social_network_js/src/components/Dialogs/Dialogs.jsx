import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItam/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
    let newMessageElement = React.createRef()
    let addMessageHandler = () => {
        let newMessage = newMessageElement.current.value
        alert(newMessage)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessageHandler}>Send
                </button>
            </div>
        </div>
    )
}

export default Dialogs