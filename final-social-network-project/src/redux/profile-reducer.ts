import {ActionsType, postsDataType, profilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState: profilePageType = {
    postsData: [
        {id: '1', message: 'It`s my first post', likesCounter: 1},
        {id: '2', message: 'Hi, how are you?', likesCounter: 5},
        {id: '3', message: 'GO GO GO?', likesCounter: 7},
        {id: '4', message: 'Test props', likesCounter: 13},
    ],
    newPostText: '',
    profile: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
}
export const profileReducer = (state: profilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: postsDataType = {
                id: '5',
                message: state.newPostText,
                likesCounter: 1
            }
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export const addPostAC = (): AddPostACType => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextAC = (text: string): UpdateNewPostTextACType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export type AddPostACType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
