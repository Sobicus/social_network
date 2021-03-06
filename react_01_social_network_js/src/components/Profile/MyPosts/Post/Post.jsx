import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYMuOMDONMIHEWJ0vNeT1dRRoTawKCDTF2Q&usqp=CAU'/>
            {props.message}
            <div>
                <span>like </span> {props.likeCount}
            </div>
        </div>
    )
}

export default Post;