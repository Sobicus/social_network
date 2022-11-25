import style from './../Dialogs.module.css'
import React from "react";

type MessagePropsType = {
    message: string
}

export const Message:React.FC<MessagePropsType> = (props ) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}