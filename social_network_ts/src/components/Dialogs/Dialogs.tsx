import s from './Dialogs.module.css'
import {DialogItem } from "./DialogItem/DialogItem";
import { Message } from './Message/Message';
import { dialogsDataType, messagesDataType } from '../../redux/state';

type DialogsPropsType={
    dialogsData:Array<dialogsDataType>
    messagesData:Array<messagesDataType>
}
export const Dialogs:React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map((el) => {
                    return (
                        <DialogItem id={el.id} name={el.name}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {props.messagesData.map((el) => {
                    return (
                        <Message id={el.id} message={el.message}/>
                    )
                })}
            </div>
        </div>
    )
}