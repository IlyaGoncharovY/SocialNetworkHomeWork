import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {StoreType} from "../../redux/State";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/message-reducer";
import {store} from "../../redux/r-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    dialogData: dialogData[]
    messageData: messageData[]
    newMessageBody: string
    store: StoreType
}

type dialogData = {
    id: string
    name: string
}

type messageData = {
    id: string
    message: string
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().messagePage
    // let dialogElements = props.dialogData.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    //
    // let messagesElement = props.messageData.map(el => <Message message={el.message} key={el.id}/>)
    //
    // let newMessageBody = props.newMessageBody

    let onSendMessageClick = () => {
       props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: any/*e: ChangeEvent<HTMLTextAreaElement>*/) => {
        // let body = e.currentTarget.value
        let action = updateNewMessageBodyAC(body)
        props.store.dispatch(action)
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}
                 newMessageBody={props.newMessageBody}/>
    );
};

