import {usersPageType, usersStateType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: '1',
            followed: false,
            fullName: 'Dmitriy',
            status: 'I am a boss',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
        {
            id: '2',
            followed: true,
            fullName: 'Maksim',
            status: 'Hard work',
            location: {city: 'Odessa', country: 'Ukraine'}
        },
        {
            id: '3',
            followed: true,
            fullName: 'Alina',
            status: 'Business lady',
            location: {city: 'Altea', country: 'Spain'}
        },
        {
            id: '4',
            followed: true,
            fullName: 'Vika',
            status: 'Just for fun',
            location: {city: 'New-York', country: 'USA'}
        },
        {
            id: '5',
            followed: false,
            fullName: 'Emiliia',
            status: 'Life is game',
            location: {city: 'Ottawa', country: 'Canada'}
        }
    ]
}
export const usersReducer = (state: usersPageType = initialState, action: UsersReducerActionType) => {
    switch (action.type) {
        case "SET-USERS":{
            return {...state, users: [...state.users, ...action.users]}
        }
        case "FOLLOW": {
            return {
                ...state, users: state.users.map(el => el.id === action.userID ? el.followed = true : el)
            }
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        default:
            return state
    }
}
export const setUsersAC = (users: Array<usersStateType>) => {
    return {type: SET_USERS, users} as const
}
export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unfollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}
type setUsersACType = ReturnType<typeof setUsersAC>
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
export type UsersReducerActionType = FollowACType | UnfollowACType | setUsersACType