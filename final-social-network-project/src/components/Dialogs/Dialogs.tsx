import style from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                <div className={style.dialog + ' ' + style.active}>Max</div>
                <div className={style.dialog}>Alina</div>
                <div className={style.dialog}>Vika</div>
                <div className={style.dialog}>Lubov</div>
                <div className={style.dialog}>Anatoliy</div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>Good, and you?</div>
            </div>

        </div>
    )
}