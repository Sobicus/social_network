import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsContainerType = {}

export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = props.store.getState()
                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                const onPostChange = (text: string) => {
                    let action = updateNewPostTextAC(text)
                    store.dispatch(action)
                }
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}
                />
            }
            }
        </StoreContext.Consumer>
        // <MyPosts postsData={} newPostText={} dispatch={}/>
    )
}