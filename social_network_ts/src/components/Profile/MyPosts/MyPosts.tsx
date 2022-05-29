import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
               <Post postText='Hello my friend' likeCount={5}/>
               <Post postText='It my first types' likeCount={11}/>
               <Post postText='Go go go fly' likeCount={13}/>
            </div>
        </div>
    )
}