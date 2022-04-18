import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";






const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Ilya"} id={"1"}/>
                <DialogItem name={"Nastya"} id={"1"}/>
                <DialogItem name={"Varya"} id={"1"}/>
                <DialogItem name={"Aiki"} id={"1"}/>
            </div>
            <div className={s.messages}>
                <Message message={"hello"}/>
                <Message message={"ho ho ho"}/>
                <Message message={"vnature"}/>
            </div>
        </div>
    );
};

export default Dialogs;