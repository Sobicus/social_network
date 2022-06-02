import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postsDataType, profilePageType, stateType} from "../../../redux/state";

type MyPostsPropsType={
    postsData:Array<postsDataType>
}
export const MyPosts:React.FC<MyPostsPropsType>= (props) => {
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
                {props.postsData.map((el)=>{
                    return(
                        <Post id={el.id} message={el.message} likeCount={el.likeCount}/>
                    )
                })}
            </div>
        </div>
    )
}