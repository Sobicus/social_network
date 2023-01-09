import React from "react";
import {stateType} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state: stateType) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)