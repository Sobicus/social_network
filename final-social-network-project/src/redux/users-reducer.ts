import {usersPageType, usersStateType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState:usersPageType = {
    users: [
        // {
        //     id: '1',
        //     photoUrl:'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
        //     followed: false,
        //     fullName: 'Dmitriy',
        //     status: 'I am a boss',
        //     location: {city: 'Kyiv', country: 'Ukraine'}
        // },
        // {
        //     id: '2',
        //     photoUrl:'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
        //     followed: true,
        //     fullName: 'Maksim',
        //     status: 'Hard work',
        //     location: {city: 'Odessa', country: 'Ukraine'}
        // },
        // {
        //     id: '3',
        //     photoUrl:'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
        //     followed: true,
        //     fullName: 'Alina',
        //     status: 'Business lady',
        //     location: {city: 'Altea', country: 'Spain'}
        // },
        // {
        //     id: '4',
        //     photoUrl:'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
        //     followed: true,
        //     fullName: 'Vika',
        //     status: 'Just for fun',
        //     location: {city: 'New-York', country: 'USA'}
        // },
        // {
        //     id: '5',
        //     photoUrl:'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
        //     followed: false,
        //     fullName: 'Emiliia',
        //     status: 'Life is game',
        //     location: {city: 'Ottawa', country: 'Canada'}
        // }
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