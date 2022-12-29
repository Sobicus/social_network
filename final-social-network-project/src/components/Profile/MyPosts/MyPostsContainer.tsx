import React from "react";
import {
    ActionsType,
    postsDataType,
} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";

type MyPostsContainerType = {
   store: RootStateType
}

export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextAC(text))
        props.store.dispatch(action)
    }
    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
        // <MyPosts postsData={} newPostText={} dispatch={}/>
    )
}