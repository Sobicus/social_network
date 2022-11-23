import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

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
            </div>
            <div className={style.messages}>
                {messageData.map(el => <Message message={el.message} key={el.id}/>)}
            </div>

        </div>
    )
}