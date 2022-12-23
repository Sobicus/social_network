import {AddPostACType, profileReducer, UpdateNewPostTextACType} from "./profile-reducer";
import {dialogsReducer, sendMessageACType, updateNewMessageBodyACType} from "./dialogs-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';

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
        messagesPage: {
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
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

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
    messagesPage: messagesPageType
}
export type profilePageType = {
    postsData: Array<postsDataType>
    newPostText: string
}
export type messagesPageType = {
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

