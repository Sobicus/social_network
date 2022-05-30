import React from "react";
import s from './Post.module.css'

export type postsDataType={
    id:number
    message:string
    likeCount: number
}
export const Post = (props: postsDataType) => {
    return (
        <div className={s.dialog}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8Ij8X12ctUomIqVrqBpASkfy3QtI-ZiJFw&usqp=CAU' alt='avatar'/>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}
