import {NavLink} from 'react-router-dom'
import s from './../Dialogs.module.css'

 type DialogItemsPropsType = {
    id: number
    name: string
}

export const DialogItem: React.FC<DialogItemsPropsType> = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}