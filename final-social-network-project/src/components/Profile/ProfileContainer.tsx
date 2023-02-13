import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import connect from "react-redux/es/components/connect";
import {ProfileType} from "../../redux/store";
import {setUserProfileTC} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

type ProfileContainerType<T = undefined> = {
    profile: ProfileType
    setUserProfile: (userId: number) => void
    match?: T
    /*isAuth: boolean*/
}

export function withRouter<T>(Children: ComponentType<T>) {
    return function (props: T) {
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
        if (!userId) {
            userId = 2
        }
        this.props.setUserProfile(userId)

    }

    render() {
        /*if (!this.props.isAuth) return <Navigate to={'/login'}/>*/

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>)
    }
}
let mapStateToProps = (state: RootStateType) => ({
        profile: state.profilePage.profile,
        /*isAuth: state.auth.isAuth*/
    }
)
export default withAuthRedirect(withRouter(connect(mapStateToProps, {setUserProfile: setUserProfileTC})(ProfileContainer)))