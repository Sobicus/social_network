import React from "react";
import style from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/store";
import {Preloader} from "../../common/preloader/Preloader";
type profileInfoType={
    profile: ProfileType
}
export const ProfileInfo:React.FC<profileInfoType> = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://steamuserimages-a.akamaihd.net/ugc/817811439325303605/ACB13C573377D3D2E4F32FE6ED61B3D082AA5ADC/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    alt=""/>
            </div>
            <div className={style.description_block}>
                <img src={props.profile.photos.large} alt="Photo large"/>
                ava + description
            </div>
        </div>
    )
}