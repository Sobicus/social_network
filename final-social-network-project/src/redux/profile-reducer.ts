import { postsDataType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: any, action: ActionsPostType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postsDataType = {
                id: '5',
                message: state.newPostText,
                likesCounter: 1
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
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

type AddPostACType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ActionsPostType = AddPostACType | UpdateNewPostTextACType
