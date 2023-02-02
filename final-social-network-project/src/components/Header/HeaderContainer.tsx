import React from "react";
import {Header} from "./Header";
import connect from "react-redux/es/components/connect";
import {setUserDataAC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type HeaderContainerType = {
    setAuthUserData: (userId: number, login: string, email: string) => void
    isAuth: boolean
    login: string
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {

        // axios.get<responseAuthType>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        authAPI.authMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
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
export default connect(mapStateToProps, {setAuthUserData: setUserDataAC})(HeaderContainer)