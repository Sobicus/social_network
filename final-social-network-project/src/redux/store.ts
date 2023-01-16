import {AddPostACType, profileReducer, UpdateNewPostTextACType} from "./profile-reducer";
import {dialogsReducer, sendMessageACType, updateNewMessageBodyACType} from "./dialogs-reducer";

export let store: storeType = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', message: 'It`s my first post', likesCounter: 1},
                {id: '2', message: 'Hi, how are you?', likesCounter: 5},
                {id: '3', message: 'GO GO GO?', likesCounter: 7},
                {id: '4', message: 'Test props', likesCounter: 13},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: '1',
                    name: 'Max',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
                },
                {
                    id: '2',
                    name: 'Alina',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
                },
                {
                    id: '3',
                    name: 'Vika',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
                },
                {
                    id: '4',
                    name: 'Lubov',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
                },
                {
                    id: '5',
                    name: 'Anatoliy',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
                },
            ],
            messageData: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'Good, and you?'},
            ],
            newMessageBody: '',
        },
        usersPage: {
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
                },
            ],
        },

    },
    _callSubscriber(state: stateType) {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}
export type ActionsType = AddPostACType | UpdateNewPostTextACType | sendMessageACType | updateNewMessageBodyACType

export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    dispatch: (action: ActionsType) => void
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    usersPage: usersPageType
}
export type profilePageType = {
    postsData: Array<postsDataType>
    newPostText: string
}
export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
    newMessageBody: string
}
export type messageDataType = {
    id: string
    message: string
}
export type dialogsDataType = {
    id: string
    name: string
    avatar: string
}
export type postsDataType = {
    id: string
    message: string
    likesCounter: number
}
export type usersPageType = {
    users: Array<usersStateType>
}
export type usersStateType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: usersLocationStateType
}
type usersLocationStateType = {
    city: string
    country: string
}

