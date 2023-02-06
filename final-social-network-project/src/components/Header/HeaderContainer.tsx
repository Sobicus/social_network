import React from "react";
import {Header} from "./Header";
import connect from "react-redux/es/components/connect";
import {authMeTC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";


type HeaderContainerType = {
    setAuthUserData: () => void
    isAuth: boolean
    login: string
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        // axios.get<responseAuthType>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        // authAPI.authMe()
        //     .then(res => {
        //         if (res.data.resultCode === 0) {
        //             let {id, login, email} = res.data.data
        //             this.props.setAuthUserData(id, login, email)
        //         }
        //     })

        this.props.setAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {setAuthUserData: authMeTC})(HeaderContainer)