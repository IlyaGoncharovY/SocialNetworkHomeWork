import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {StoreType} from "../../redux/State";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/message-reducer";

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

export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogData.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)

    let messagesElement = props.messageData.map(el => <Message message={el.message} key={el.id}/>)

    let newMessageBody = props.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyAC(body))
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
                                  placeholder={"Enter your message"}
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

