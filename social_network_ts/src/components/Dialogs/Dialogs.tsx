import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

type DialogItemsPropsType = {
    id: number
    name: string
}
type MessageItemPropsType = {
    id: number
    message: string
}
const DialogItem: React.FC<DialogItemsPropsType> = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message: React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData: Array<DialogItemsPropsType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]
let messagesData: Array<MessageItemPropsType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your going'},
    {id: 3, message: 'Yo'},
]
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((el) => {
                    return (
                        <DialogItem id={el.id} name={el.name}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map((el) => {
                    return (
                        <Message id={el.id} message={el.message}/>
                    )
                })}
            </div>
        </div>
    )
}