import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}
export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={`/dialogs/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    )
}