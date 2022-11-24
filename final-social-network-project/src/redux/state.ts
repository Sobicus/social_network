export const state: stateType = {
    profilePage: {
        postsData: [
            {id: '1', message: 'It`s my first post', likesCounter: 1},
            {id: '2', message: 'Hi, how are you?', likesCounter: 5},
            {id: '3', message: 'GO GO GO?', likesCounter: 7},
            {id: '4', message: 'Test props', likesCounter: 13},
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: '1', name: 'Max'},
            {id: '2', name: 'Alina'},
            {id: '3', name: 'Vika'},
            {id: '4', name: 'Lubov'},
            {id: '5', name: 'Anatoliy'},
        ],
        messageData: [
            {id: '1', message: 'Hi'},
            {id: '1', message: 'How are you?'},
            {id: '1', message: 'Good, and you?'},
        ]
    },
}
export type stateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}
export type profilePageType = {
    postsData: Array<postsDataType>
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
}
export type postsDataType = {
    id: string
    message: string
    likesCounter: number
}