import React from "react";
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8Ij8X12ctUomIqVrqBpASkfy3QtI-ZiJFw&usqp=CAU'
                alt='avatar'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}