import React, {RefObject} from "react";
import {postsDataType} from "../../../redux/state";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsType = {
    postsData: Array<postsDataType>
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPostHandler = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={style.posts_block}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addNewPostHandler}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={style.posts}>
                {props.postsData.map(el => <Post id={el.id} message={el.message} likesCounter={el.likesCounter}
                                                 key={el.id}/>)}
            </div>
        </div>
    )
}