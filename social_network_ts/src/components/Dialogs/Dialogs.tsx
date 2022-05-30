import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

type DialogItemsPropsType = {
    name:string
    id: number
}
const DialogItem = (props: DialogItemsPropsType)=>{
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
type MessageItemPropsType ={
    message:string
}
const MessageItem = (props:MessageItemPropsType) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Andrey'} id={2}/>
                <DialogItem name={'Sveta'} id={3}/>
                <DialogItem name={'Sasha'} id={4}/>
                <DialogItem name={'Viktor'} id={5}/>
                <DialogItem name={'Valera'} id={6}/>


                {/*<div className={s.dialog + ' ' + s.active}>*/}
                {/*    <NavLink to='/dialogs/1'>Dimych</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/2'>Andrey</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/3'>Sveta</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/4'>Sasha</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/5'>Viktor</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/6'>Valera</NavLink>*/}
                {/*</div>*/}
            </div>

            <div className={s.messages}>
                <MessageItem message={'Hi'}/>
                <MessageItem message={'How is your going'}/>
                <MessageItem message={'Yo'}/>
                {/*<div className={s.message}>Hi</div>*/}
                {/*<div className={s.message}>How is your going</div>*/}
                {/*<div className={s.message}>Yo</div>*/}
            </div>
        </div>
    )
}