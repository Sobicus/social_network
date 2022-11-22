import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to='/dialogs/1'>
                        Max
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2'>
                        Alina
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3'>
                        Vika
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4'>
                        Lubov
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/5'>
                        Anatoliy
                    </NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>Good, and you?</div>
            </div>

        </div>
    )
}