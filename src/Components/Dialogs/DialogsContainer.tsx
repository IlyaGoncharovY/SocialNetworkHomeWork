import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
// import {reducerAllType, StateType, StoreType} from "../../redux/State";
import {initialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/message-reducer";
import {AppStateType, store} from "../../redux/r-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// type DialogsPropsType = {
//     dialogData: dialogData[]
//     messageData: messageData[]
//     newMessageBody: string
//     store: StoreType
// }
//
// type dialogData = {
//     id: string
//     name: string
// }
//
// type messageData = {
//     id: string
//     message: string
// }

// export const DialogsContainer = (props: DialogsPropsType) => {
//     let state = props.store.getState().messagePage
//     // let dialogElements = props.dialogData.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
//     //
//     // let messagesElement = props.messageData.map(el => <Message message={el.message} key={el.id}/>)
//     //
//     // let newMessageBody = props.newMessageBody
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageAC())
//     }
//
//     let onNewMessageChange = (body: string/*e: ChangeEvent<HTMLTextAreaElement>*/) => {
//         // let body = e.currentTarget.value
//         let action = updateNewMessageBodyAC(body)
//         props.store.dispatch(action)
//     }
//
//     return (
//         <Dialogs updateNewMessageBody={onNewMessageChange}
//                  sendMessage={onSendMessageClick}
//                  dialogsPage={state}
//                  newMessageBody={props.newMessageBody}/>
//     );
// };
type mapStateToPropsType = {
    dialogsPage: initialStateType
    newMessageBody: initialStateType
}
type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage:(body:string) => void
}

export type dialogsContainerType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.messagePage,
        newMessageBody: state.messagePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageAC())
        },
        sendMessage: (body:string) => {
            let action = updateNewMessageBodyAC(body)
           dispatch(action)
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
