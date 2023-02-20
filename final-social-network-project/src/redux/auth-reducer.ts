import {authAPI, modelType} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET-USER-DATA'

const initialAuthState: initialAuthStateType = {
    userId: 24027,
    login: "S",
    email: "Test",
    isAuth: false
}

export type initialAuthStateType = {
    userId: number
    login: string
    email: string
    isAuth: boolean
}

export const authReducer = (state: initialAuthStateType = initialAuthState, action: authReducerType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

export const setUserDataAC = (userId: number, login: string, email: string) => {
    return {type: SET_USER_DATA, data: {userId, login, email}} as const
}
export const authMeTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setUserDataAC(id, login, email))
            }
        })
}

export const loginTC = (model: modelType) => (dispatch: Dispatch) => {
    authAPI.login(model)
        .then(response => {
        if (response.data.resultCode === 0) {
            console.log(response)
        }
    })
}

type setUserDataACType = ReturnType<typeof setUserDataAC>

type authReducerType = setUserDataACType