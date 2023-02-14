import React from "react";
import style from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/store";
import {Preloader} from "../../common/preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";

type profileInfoType = {
    profile: ProfileType
}
export const ProfileInfo: React.FC<profileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://steamuserimages-a.akamaihd.net/ugc/817811439325303605/ACB13C573377D3D2E4F32FE6ED61B3D082AA5ADC/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    alt=""/>
            </div>
            <div className={style.description_block} style={{margin:10}}>
                <img src={props.profile.photos.large} alt="Photo large" style={{borderRadius: 500, margin:5}}/>
                <ProfileStatus status={'Hello my dear friend'}/>
                <br/><hr/>
                {props.profile.userId}<br/><hr/>
                {props.profile.fullName}<br/><hr/>
                {props.profile.aboutMe}<br/><hr/>
                {props.profile.lookingForAJob}<br/><hr/>
                {props.profile.lookingForAJobDescription}<br/><hr/>
                {props.profile.contacts.youtube}<br/><hr/>
                {props.profile.contacts.website}<br/><hr/>
                {props.profile.contacts.vk}<br/><hr/>
                {props.profile.contacts.mainLink}<br/><hr/>
                {props.profile.contacts.twitter}<br/><hr/>
                {props.profile.contacts.instagram}<br/><hr/>
                {props.profile.contacts.github}<br/><hr/>
                {props.profile.contacts.facebook}<br/><hr/>
                ava + description <hr/>

            </div>
        </div>
    )
}