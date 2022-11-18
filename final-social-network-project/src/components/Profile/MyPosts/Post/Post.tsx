import React from "react";
import style from './Post.module.css'

export const Post = () => {
    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nvlmwygLKlmp7aC6rEIPSgNEcTLbi1TV5P1gVU-LSwImRRp9CzMZywB1PPC9JjeFWNU&usqp=CAU"
                alt=""/>
            POST 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}