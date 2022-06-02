 export type postsDataType= {
    id: number
    message: string
    likeCount: number
}
 export type dialogsDataType = {
    id: number
    name: string
}
 export type messagesDataType = {
    id: number
    message: string
}
export type profilePageType = {
    postsData: Array<postsDataType>
}
type messagesPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData:Array<messagesDataType>
}
export type stateType = {
    profilePage:profilePageType
    messagesPage:messagesPageType
}
export let state:stateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello my friend', likeCount: 5},
            {id: 2, message: 'It my first types', likeCount: 5},
            {id: 3, message: 'Go go go fly', likeCount: 5},
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your going'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    }
}
//
// : Array<postsDataType>
// : Array<DialogItemsPropsType>
// : Array<MessageItemPropsType>

