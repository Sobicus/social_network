import {usersPageType, usersStateType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState: usersPageType = {
    users: [
        // {
        //     name: 'Alina',
        //     id: 1,
        //     uniqueUrlName: 'test',
        //     photos: {small: "null", large: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top'},
        //     status: 'I am a boss',
        //     followed: false
        // },
        // {
        //     name: 'Max',
        //     id: 2,
        //     uniqueUrlName: 'test',
        //     photos: {small: "null", large: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top'},
        //     status: 'I am a boss',
        //     followed: true
        // },
        // {
        //     name: 'Vika',
        //     id: 3,
        //     uniqueUrlName: 'test',
        //     photos: {small: "null", large: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top'},
        //     status: 'I am a boss',
        //     followed: false
        // },
    ],
    pageSize: 5,
    totalUsersCount: 100 ,
    currentPage: 2,
}
export const usersReducer = (state: usersPageType = initialState, action: UsersReducerActionType) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case FOLLOW: {
            return {
                ...state, users: state.users.map(el => el.id === action.userID ? el.followed = true : el)
            }
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
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
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
export type UsersReducerActionType = FollowACType | UnfollowACType | setUsersACType | setCurrentPageACType