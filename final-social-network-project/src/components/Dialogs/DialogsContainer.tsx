import React from "react";
import {stateType} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

// type DialogsContainerType = {
//     store: storeType
// }

// export const DialogsContainer: React.FC<DialogsContainerType> = (props) => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().messagesPage
//
//             const onSendMessageClick = () => {
//                 store.dispatch(sendMessageAC())
//             }
//             const onNewMessageChange = (body: string) => {
//                 store.dispatch(updateNewMessageBodyAC(body))
//             }
//             return <Dialogs
//                 updateNewMessageBody={onNewMessageChange}
//                 sendMessage={onSendMessageClick}
//                 messagesPage={store.getState().messagesPage}
//             />
//         }
//         }
//     </StoreContext.Consumer>
// }

let mapStateeToProps = (state: stateType) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(body: string)=>{dispatch(updateNewMessageBodyAC(body))},
        sendMessage:()=>{ dispatch(sendMessageAC())}
    }
}

const DialogsContainer = connect(mapStateeToProps, mapDispatchToProps)(Dialogs)