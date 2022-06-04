import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

type DialogsPropsType = {
    dialogData:dialogData[]
    messageData:messageData[]
}

type dialogData = {
    id: string
    name:string
}

type messageData = {
    id: string
    message:string
}

export const Dialogs = (props:DialogsPropsType) => {

    let dialogElements = props.dialogData.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)

    let messagesElement = props.messageData.map(el => <Message message={el.message} key={el.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

