import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import connect from "react-redux/es/components/connect";
import {ProfileType, stateType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

type ProfileContainerType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void

}

/*export function withRouter(Children: any) {
    return (props: ProfileContainerType) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}*/

function withRouter(Component:any) {
    function ComponentWithRouterProp(props:ProfileContainerType) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }}/>
    }

    return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component<ProfileContainerType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        debugger
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/`)
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


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))