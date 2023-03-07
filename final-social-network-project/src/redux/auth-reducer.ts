import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppDispatch} from "./redux-store";

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA'
const ERROR_MESSAGE = 'social-network/auth/ERROR-MESSAGE'

const initialAuthState: initialAuthStateType = {
    userId: 1,
    login: "",
    email: "",
    isAuth: false,
    errorMessage: ''
}
// let initialAuthState1 = {
//     userId: null as number | null,
//     login: null as string | null,
//     email: null as string | null,
//     isAuth: false
// }
// type initialAuthState1Type = typeof initialAuthState1
export type initialAuthStateType = {
    userId: number
    login: string
    email: string
    isAuth: boolean
    errorMessage: string
}
export const authReducer = (state: initialAuthStateType = initialAuthState, action: authReducerType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        case ERROR_MESSAGE: {
            return {...state, errorMessage: action.errorMessage}
        }
        default:
            return state
    }
}
export const setUserDataAC = (userId: number, login: string, email: string, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {userId, login, email, isAuth}} as const
}
export const errorMessageAC = (errorMessage: string) => {
    return {type: ERROR_MESSAGE, errorMessage} as const
}
export const authMeTC = () => async (dispatch: AppDispatch) => {
    let response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setUserDataAC(id, login, email, true))
    }

}
export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppDispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        console.log(response)
        await dispatch(authMeTC())
        dispatch(errorMessageAC(''))
    }
    if (response.data.resultCode === 1) {
        let errorMesage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(errorMessageAC(errorMesage))
    }
}
export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(0, '', '', false))
    }
}
type setUserDataACType = ReturnType<typeof setUserDataAC>
type errorMessageACType = ReturnType<typeof errorMessageAC>
type authReducerType = setUserDataACType | errorMessageACType