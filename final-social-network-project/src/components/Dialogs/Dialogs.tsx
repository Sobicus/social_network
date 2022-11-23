import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsDataType, messageDataType } from '../../redux/state';

type DialogsType={
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
}

export const Dialogs = (props:DialogsType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {props.dialogsData.map(el => <DialogItem id={el.id} name={el.name} key={el.id}/>)}
            </div>
            <div className={style.messages}>
                {props.messageData.map(el => <Message message={el.message} key={el.id}/>)}
            </div>

        </div>
    )
}