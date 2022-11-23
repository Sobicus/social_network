import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message='It`s my first post' likesCounter={1}/>
                <Post message='Hi, how are you?' likesCounter={5}/>
                <Post message='GO GO GO?' likesCounter={7}/>
                <Post message='Test props' likesCounter={13}/>
            </div>
        </div>
    )
}