import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/store";

type profileComponentType = {
    profile: ProfileType
    status:string
    updateStatus:(status:string)=>void
    isOwner:boolean
}

export const Profile: React.FC<profileComponentType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>
    )
}