import {messageDataType, messagesPageType, postsDataType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =
    {
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
    }
export const dialogsReducer = (state: messagesPageType = initialState, action: ActionsSendMessageType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const newMessage: messageDataType = {
                id: '1',
                message: state.newMessageBody
            }
            state.newMessageBody = ''
            state.messageData.push(newMessage)
            return state
        default:
            return state

    }
    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //      state.newMessageBody = action.body
    //  } else if (action.type === SEND_MESSAGE) {
    //      const newMessage: messageDataType = {
    //          id: '1',
    //          message: state.newMessageBody
    //      }
    //      state.newMessageBody = ''
    //      state.messageData.push(newMessage)
    //  }

}

export const sendMessageAC = (): sendMessageACType => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyAC = (body: string): updateNewMessageBodyACType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

type sendMessageACType = {
    type: 'SEND-MESSAGE'
}
type updateNewMessageBodyACType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type ActionsSendMessageType = sendMessageACType | updateNewMessageBodyACType
