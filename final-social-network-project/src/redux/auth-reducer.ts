const SET_USER_DATA = 'SET-USER-DATA'

const initialAuthState: initialAuthStateType = {
    userId: 1,
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
export const authMeTC=()=>()=>{}

    type setUserDataACType = ReturnType<typeof setUserDataAC>

type authReducerType = setUserDataACType