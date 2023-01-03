import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsContainerType} from "./DialogsContainer";
import {AddMessageFormRedux} from "./Message/AddMessageForm";


export const Dialogs = (props: dialogsContainerType) => {

    let state = props.dialogsPage

    let dialogElements = state.dialog.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)

    let messagesElement = state.message.map(el => <Message message={el.message} key={el.id}/>)

    let addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


