import React from "react";
import {ActionsType, profilePageType} from "../../redux/store";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {RootStateType} from "../../redux/redux-store";

type ProfileType = {

}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
            {/*<MyPosts*/}
            {/*    postsData={props.profilePage.postsData}*/}
            {/*    newPostText={props.profilePage.newPostText}*/}
            {/*    dispatch={props.dispatch}*/}
            {/*/>*/}
        </div>
    )
}