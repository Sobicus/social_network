import React from "react";
import { postsDataType } from "../../redux/state";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    postsData:Array<postsDataType>
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}