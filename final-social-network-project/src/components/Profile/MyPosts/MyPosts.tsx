import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postDataType} from "../../../index";

type MyPostsType = {
    postData:Array<postDataType>
}

export const MyPosts = (props:MyPostsType) => {

    return (
        <div className={style.posts_block}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {props.postData.map(el=><Post id={el.id} message={el.message} likesCounter={el.likesCounter} key={el.id}/>)}
            </div>
        </div>
    )
}