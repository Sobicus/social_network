import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    type postDataType = {
        id: string
        message: string
        likesCounter: number
    }

    const postData: Array<postDataType> = [
        {id: '1', message: 'It`s my first post', likesCounter: 1},
        {id: '2', message: 'Hi, how are you?', likesCounter: 5},
        {id: '3', message: 'GO GO GO?', likesCounter: 7},
        {id: '4', message: 'Test props', likesCounter: 13},
    ]

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
                {postData.map(el=><Post message={el.message} likesCounter={el.likesCounter} key={el.id}/>)}
            </div>
        </div>
    )
}