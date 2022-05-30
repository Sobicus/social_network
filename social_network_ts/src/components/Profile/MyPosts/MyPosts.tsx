import React from "react";
import s from './MyPosts.module.css'
import {Post, postsDataType} from "./Post/Post";


let postsData: Array<postsDataType> = [
    {id:1, message:'Hello my friend', likeCount:5},
    {id:2, message:'It my first types', likeCount:5},
    {id:3, message:'Go go go fly', likeCount:5},
]

export const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsData.map((el)=>{
                    return(
                        <Post id={el.id} message={el.message} likeCount={el.likeCount}/>
                    )
                })}
            </div>
        </div>
    )
}