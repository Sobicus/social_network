import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {stateType} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";

let mapStateToProps = (state: stateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
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