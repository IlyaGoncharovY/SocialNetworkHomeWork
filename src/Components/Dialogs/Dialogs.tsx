import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

const dialogData = [
    {id: "1", name: "Ilya"},
    {id: "2", name: "Nastya"},
    {id: "3", name: "Varya"},
    {id: "4", name: "Aiki"}
]

const messageData = [
    {id:"1", message: "hello"},
    {id:"2", message: "ho ho ho"},
    {id:"3", message: "vnature"},
]

let dialogElements = dialogData.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
//     [
//     <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>,
//     <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>,
//     <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>,
//     <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
// ]

let messagesElement = messageData.map(el => <Message message={el.message} key={el.id}/>)

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}
               {/* <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>*/}
            </div>
            <div className={s.messages}>
                {messagesElement}

                {/*<Message message={messageData[0].message}/>*/}
                {/*<Message message={messageData[1].message}/>*/}
                {/*<Message message={messageData[2].message}/>*/}
            </div>
        </div>
    );
};

