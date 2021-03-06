import s from './../Dialogs.module.css'


 type MessageItemPropsType = {
    id: number
    message: string
}

export const Message: React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
