import React from 'react';
import s from "./Dialogs.module.css"

type DialogsPropsType = {

}


const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Ilya
                </div>
                <div className={s.dialog}>
                    Nastya
                </div>
                <div className={s.dialog}>
                    Varya
                </div>
                <div className={s.dialog}>
                    Aiki
                </div>
            </div>
            <div className={s.messages}>
               <div>hello</div>
               <div>how is your ?</div>
               <div>OK</div>
            </div>
        </div>
    );
};

export default Dialogs;