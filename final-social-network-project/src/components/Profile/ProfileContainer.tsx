import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import connect from "react-redux/es/components/connect";
import {profileContactsType, ProfileType, stateType, usersPhotosStateType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";

type ProfileContainerType = {
    profile: ProfileType
    setUserProfile:(profile: ProfileType)=>void

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

let mapStateToProps = (state: stateType) => ({
        profile: state.profilePage.profile
    }
)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)