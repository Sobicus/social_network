import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {rerenderEntireTree} from "../../../index";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p=><Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement= React.createRef()
    let addPostHandler = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ""
    }

    return (
        <div className={s.postBlocks}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                <button onClick={addPostHandler}>Add post</button>
                <button>Remove</button>
                </div>
                </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;