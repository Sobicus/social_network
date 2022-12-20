import {messageDataType, postsDataType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state: any, action: ActionsSendMessageType) => {
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
    }as const
}
export const updateNewMessageBodyAC = (body: string): updateNewMessageBodyACType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }as const
}

type sendMessageACType = {
    type: 'SEND-MESSAGE'
}
type updateNewMessageBodyACType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type ActionsSendMessageType = sendMessageACType | updateNewMessageBodyACType
