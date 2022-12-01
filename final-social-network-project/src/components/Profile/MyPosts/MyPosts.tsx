import React from "react";
import {postsDataType} from "../../../redux/state";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsType = {
    postsData: Array<postsDataType>
    newPostText:string
    addNewPost: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.addNewPost(text)
        }
        text = ''
    }


    const onPostChange = ()=>{

    }

    return (
        <div className={style.posts_block}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addNewPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={style.posts}>
                {props.postsData.map(el => <Post
                    id={el.id}
                    message={el.message}
                    likesCounter={el.likesCounter}
                    key={el.id}/>)}
            </div>
        </div>
    )
}