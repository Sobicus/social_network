import React, {ComponentType} from "react";
import axios from "axios";
import {Profile} from "./Profile";
import connect from "react-redux/es/components/connect";
import {ProfileType, stateType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

type ProfileContainerType<T = undefined> = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
    match?: T
}
export function withRouter<T>(Children: ComponentType<T>) {
    return function(props: T) {
        const match = useParams();
        const newProps = {...props, match}
        return <Children {...newProps}/>
    }
}

type ProfileParamsType = {
    userId: number
}
class ProfileContainer extends React.Component<ProfileContainerType<ProfileParamsType>> {

    componentDidMount() {
        let userId = this.props.match?.userId
            profileAPI.getProfile(userId!)
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
export default withRouter(connect(mapStateToProps, {setUserProfile})(ProfileContainer))