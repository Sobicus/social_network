export let store: storeType = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', message: 'It`s my first post', likesCounter: 1},
                {id: '2', message: 'Hi, how are you?', likesCounter: 5},
                {id: '3', message: 'GO GO GO?', likesCounter: 7},
                {id: '4', message: 'Test props', likesCounter: 13},
            ],
            newPostText: ''
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
            ]
        },
    },
    getState(){
        return this._state
    },
    _callSubscriber(state: stateType) {
        console.log('State changed')
    },
    addNewPost() {
        const newPost: postsDataType = {id: '5', message: this._state.profilePage.newPostText, likesCounter: 1}
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    }
}

export type storeType = {
    _state:stateType
    getState:()=>stateType
    _callSubscriber: (state: stateType)=>void
    addNewPost:()=>void
    updateNewPostText : (newText: string) => void
    subscribe:(observer: (state: stateType) => void)=>void
}
// let rerenderEntireTree = (state: stateType) => {
//     console.log('State changed')
// }
// export const addNewPost = () => {
//     const newPost: postsDataType = {id: '5', message: state.profilePage.newPostText, likesCounter: 1}
//     state.profilePage.postsData.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }
// export const subscribe = (observer: (state: stateType) => void) => {
//     rerenderEntireTree = observer
// }
// export const state: stateType = {
//     profilePage: {
//         postsData: [
//             {id: '1', message: 'It`s my first post', likesCounter: 1},
//             {id: '2', message: 'Hi, how are you?', likesCounter: 5},
//             {id: '3', message: 'GO GO GO?', likesCounter: 7},
//             {id: '4', message: 'Test props', likesCounter: 13},
//         ],
//         newPostText: ''
//     },
//     messagesPage: {
//         dialogsData: [
//             {
//                 id: '1',
//                 name: 'Max',
//                 avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
//             },
//             {
//                 id: '2',
//                 name: 'Alina',
//                 avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
//             },
//             {
//                 id: '3',
//                 name: 'Vika',
//                 avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
//             },
//             {
//                 id: '4',
//                 name: 'Lubov',
//                 avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
//             },
//             {
//                 id: '5',
//                 name: 'Anatoliy',
//                 avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBStQk5WBxo9GGOnZ8vLmViRGavDshthEnw&usqp=CAU"
//             },
//         ],
//         messageData: [
//             {id: '1', message: 'Hi'},
//             {id: '2', message: 'How are you?'},
//             {id: '3', message: 'Good, and you?'},
//         ]
//     },
// }

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


