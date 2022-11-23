import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={`/dialogs/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    )
}
type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}
export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                <DialogItem id='1' name='Max'/>
                <DialogItem id='2' name='Alina'/>
                <DialogItem id='3' name='Vika'/>
                <DialogItem id='4' name='Lubov'/>
                <DialogItem id='5' name='Anatoliy'/>
            </div>
            <div className={style.messages}>
                <Message message='Hi'/>
                <Message message='How are you?\n'/>
                <Message message='Good, and you?'/>
            </div>

        </div>
    )
}