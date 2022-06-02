import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsDataType, profilePageType, stateType} from "../../redux/state";


type ProfilePropsType={
    postsData:Array<postsDataType>
}

export const Profile:React.FC<ProfilePropsType>= (props) => {
    console.log(props.postsData)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}