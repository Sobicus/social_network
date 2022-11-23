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

    type dialogsDataType = {
        id: string
        name: string
    }
    const dialogsData: Array<dialogsDataType> = [
        {id: '1', name: 'Max'},
        {id: '2', name: 'Alina'},
        {id: '3', name: 'Vika'},
        {id: '4', name: 'Lubov'},
        {id: '5', name: 'Anatoliy'},
    ]
    type messageDataType = {
        id: string
        message: string
    }
    const messageData: Array<messageDataType> = [
        {id: '1', message: 'Hi'},
        {id: '1', message: 'How are you?'},
        {id: '1', message: 'Good, and you?'},
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsData.map(el => <DialogItem id={el.id} name={el.name} key={el.id}/>)}
                <DialogItem id='1' name='Max'/>
                <DialogItem id='2' name='Alina'/>
                <DialogItem id='3' name='Vika'/>
                <DialogItem id='4' name='Lubov'/>
                <DialogItem id='5' name='Anatoliy'/>
            </div>
            <div className={style.messages}>
                {messageData.map(el => <Message message={el.message} key={el.id}/>)}
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Good, and you?'/>
            </div>

        </div>
    )
}