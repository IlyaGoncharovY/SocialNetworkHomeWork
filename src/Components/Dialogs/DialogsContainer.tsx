import React from 'react';
import {initialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/r-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    dialogsPage: initialStateType
    newMessageBody: initialStateType
    isAuth:boolean
}
type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage:(body:string) => void
}

export type dialogsContainerType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.messagePage,
        newMessageBody: state.messagePage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            let action = sendMessageAC()
           dispatch(action)
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
