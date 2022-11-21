import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message='It`s my first post' likesCounter={1}/>
                <Post message='Hi, how are you?' likesCounter={5}/>
                <Post message='GO GO GO?' likesCounter={7}/>
                <Post message='Test props' likesCounter={13}/>
            </div>
        </div>
    )
}