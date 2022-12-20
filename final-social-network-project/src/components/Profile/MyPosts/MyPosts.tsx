import React from "react";
import {
    postsDataType,
    } from "../../../redux/store";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsPostType, addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type MyPostsType = {
    postsData: Array<postsDataType>
    newPostText: string
    dispatch: (action: ActionsPostType) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    // const addNewPost = () => {
    //     props.dispatch({type: 'ADD-POST'})
    // }
    const addNewPost = () => {
        props.dispatch(addPostAC())
    }

    // const onPostChange = () => {
    //     let text = newPostElement.current?.value
    //     if (text) {
    //         props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    //     }
    // }
    const onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.dispatch(updateNewPostTextAC(text))
        }
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