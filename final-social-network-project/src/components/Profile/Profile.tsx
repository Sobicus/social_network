import React from "react";
import { profilePageType} from "../../redux/state";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    state:profilePageType
}

export const Profile:React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}/>
        </div>
    )
}