import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
// import {dialogType, messagePageType, messageType, profilePageType, StateType, StoreType} from "../../redux/State";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/message-reducer";
import {store} from "../../redux/r-store";
import {dialogsContainerType} from "./DialogsContainer";
//
// type DialogsPropsType = {
//     // dialogData: dialogData[]
//     // messageData: messageData[]
//     newMessageBody: string
//     updateNewMessageBody: (body: any) => void
//     sendMessage: () => void
//     dialogsPage: messagePageType
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

export const Dialogs = (props: dialogsContainerType) => {

    let state = props.dialogsPage

    let dialogElements = state.dialog.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)

    let messagesElement = state.message.map(el => <Message message={el.message} key={el.id}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = (body:any) => {
        props.sendMessage(body)
        //store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        // store.dispatch(updateNewMessageBodyAC(body))
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={"Enter your message1"}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

