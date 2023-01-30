import React from "react";
import {Header} from "./Header";
import axios from "axios";
import connect from "react-redux/es/components/connect";
import {setUserDataAC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";

type HeaderContainerType = {
    setAuthUserData: (userId: number, login: string, email: string) => void
    isAuth:boolean
    login:string
}
type responseType = {
    data: responseDataType
    resultCode: number
    messages: Array<string>

}
type responseDataType = {
    id: number
    email: string
    login: string
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {

        axios.get<responseType>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
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
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}
export default connect(mapStateToProps, {setAuthUserData: setUserDataAC})(HeaderContainer)