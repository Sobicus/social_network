import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

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