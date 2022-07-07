import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsContainerType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


export const Dialogs = (props: dialogsContainerType) => {

    let state = props.dialogsPage

    let dialogElements = state.dialog.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)

    let messagesElement = state.message.map(el => <Message message={el.message} key={el.id}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = (body:any) => {
        props.sendMessage(body)
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

   if(!props.isAuth) return <Redirect to={"./login"}/>

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

