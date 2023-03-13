import React, {ChangeEvent } from "react";
import style from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/store";
import {Preloader} from "../../common/preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/users_avatar.png"

type profileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner:boolean
    savePhoto: (file: File)=>void
}
export const ProfileInfo: React.FC<profileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const mainPhotoSelected=(e:ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
        console.log(e.target.files!.length)
        console.log(e.target.files?.length)
        // console.log(e.target.files.length)
        console.log(e.target.files)
        console.log(e.currentTarget.value)
    }
    return (
        <div>
            <div>
                <img
                    src="https://steamuserimages-a.akamaihd.net/ugc/817811439325303605/ACB13C573377D3D2E4F32FE6ED61B3D082AA5ADC/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    alt=""/>
            </div>
            <div className={style.description_block} style={{margin: 10}}>
                1. Large avatar
                <img src={props.profile.photos.large || userPhoto} alt="Large avatar" className={style.mainePhoto}/>
                2. Small avatar
                <img src={props.profile.photos.small} alt="Small avatar" className={style.smallPhoto}/>
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}