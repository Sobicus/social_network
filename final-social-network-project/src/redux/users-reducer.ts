import {usersPageType, usersStateType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}
export const usersReducer = (state: usersPageType = initialState, action: UsersReducerActionType) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case FOLLOW: {
            return {
                ...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)
            }
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount:action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching:action.isFetching}
        }
        default:
            return state
    }
}
export const setUsersAC = (users: Array<usersStateType>) => {
    return {type: SET_USERS, users} as const
}
export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}
export const toggleIsFetchingAC = (isFetching:boolean)=>{
    return {type:TOGGLE_IS_FETCHING,isFetching} as const
}
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
export type UsersReducerActionType = FollowACType |
    UnfollowACType |
    setUsersACType |
    setCurrentPageACType |
    setUsersTotalCountACType |
    toggleIsFetchingACType