import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import connect from "react-redux/es/components/connect";
import {profileContactsType, ProfileType, stateType, usersPhotosStateType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";

type ProfileContainerType = {
    aboutMe: string
    contacts: profileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: usersPhotosStateType
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfileContainerType, {}> {

    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile /*{...this.props}*/ profile={this.props.profile}/>
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

let mapStateToProps = (state: stateType) => ({
        profile: state.profilePage.profile
    }
)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)