import React from "react";
import {
    postsDataType,
} from "../../../redux/store";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsType = {
    // postsData: Array<postsDataType>
    // newPostText: string
    // dispatch: (action: ActionsType) => void
    posts: Array<postsDataType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        if (text)
            props.updateNewPostText(text)
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
                    <button onClick={onAddPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={style.posts}>
                {props.posts.map(el => <Post
                    id={el.id}
                    message={el.message}
                    likesCounter={el.likesCounter}
                    key={el.id}/>)}
            </div>
        </div>
    )
}