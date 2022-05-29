import React from "react";
import s from './Post.module.css'

type PostTypeProps = {
    postText:string
    likeCount: number
}
export const Post = (props: PostTypeProps) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8Ij8X12ctUomIqVrqBpASkfy3QtI-ZiJFw&usqp=CAU' alt='avatar'/>
            {props.postText}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}