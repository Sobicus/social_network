import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import connect from "react-redux/es/components/connect";
import {profileType, stateType} from "../../redux/store";
import { setUserProfile } from "../../redux/profile-reducer";

type ProfileContainerType={

}
class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get<profileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>)
    }
}

type profileResponseType = {
    aboutMe: string
    contacts: contactsProfileResponseType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: photosProfileResponseType

}
type contactsProfileResponseType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type photosProfileResponseType = {
    small: string
    large: string
}

let mapStateToProps = (state: stateType) => {
    profile: state.profilePage.profile
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)