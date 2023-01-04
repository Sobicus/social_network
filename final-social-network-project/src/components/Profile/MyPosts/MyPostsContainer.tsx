import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {stateType} from "../../../redux/store";

// type MyPostsContainerType = {}
//
// export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = props.store.getState()
//                 const addPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//                 const onPostChange = (text: string) => {
//                     let action = updateNewPostTextAC(text)
//                     store.dispatch(action)
//                 }
//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.profilePage.postsData}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//         // <MyPosts postsData={} newPostText={} dispatch={}/>
//     )
// }
const mapStateToProps=(state:stateType)=>{
    return{
        posts:state.profilePage.postsData,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addPost:()=>{dispatch(addPostAC())},
        updateNewPostText:(text: string)=>{dispatch(updateNewPostTextAC(text))}
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)