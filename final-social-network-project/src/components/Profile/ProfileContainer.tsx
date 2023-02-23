import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import connect from "react-redux/es/components/connect";
import {ProfileType} from "../../redux/store";
import {
    getStatusProfileTC,
    setUserProfileTC,
    updateStatusProfileTC
} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";

type ProfileContainerType<T = undefined> = {
    profile: ProfileType
    setUserProfile: (userId: number) => void
    match?: T
    /*isAuth: boolean*/
    status: string
    getUserStatus: (userId: number) => void
    updateStatus: (status: string) => void
    id: number
    isAuth:boolean
}
export function withRouter<T>(Component: ComponentType<T>) {
    return function (props: T) {
        const match = useParams();
        const newProps = {...props, match}
        return <Component {...newProps}/>
    }
}
type ProfileParamsType = {
    userId: number
}
class ProfileContainer extends React.Component<ProfileContainerType<ProfileParamsType>> {

    componentDidMount() {
        let userId = this.props.match?.userId

        if (!userId) {
            userId = this.props.id
        }
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>)
    }
}

let mapStateToProps = (state: RootStateType) => ({
        profile: state.profilePage.profile,
        /*isAuth: state.auth.isAuth*/
        status: state.profilePage.status,
        id: state.auth.userId,
        isAuth:state.auth.isAuth
    }
)
export default compose<React.ComponentType>(connect(mapStateToProps, {
    setUserProfile: setUserProfileTC,
    getUserStatus: getStatusProfileTC,
    updateStatus: updateStatusProfileTC
}), withRouter, /*withAuthRedirect*/)(ProfileContainer)

// let ProfileContainerWithAuthRedirect =withAuthRedirect(ProfileContainer)
// export default withAuthRedirect(withRouter(connect(mapStateToProps, {setUserProfile: setUserProfileTC})(ProfileContainerWithAuthRedirect)))