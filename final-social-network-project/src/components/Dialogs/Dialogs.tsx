import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {messagesPageType} from '../../redux/state';

type DialogsType={
    state: messagesPageType
}

export const Dialogs = (props:DialogsType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {props.state.dialogsData.map(el => <DialogItem id={el.id} name={el.name} avatar={el.avatar} key={el.id}/>)}
            </div>
            <div className={style.messages}>
                {props.state.messageData.map(el => <Message message={el.message} key={el.id}/>)}
            </div>

        </div>
    )
}