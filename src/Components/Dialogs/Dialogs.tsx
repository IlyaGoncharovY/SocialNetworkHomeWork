import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsContainerType} from "./DialogsContainer";
import {useFormik} from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";

type Values = {
    newMessageBody: string
}

export const Dialogs = (props: dialogsContainerType) => {

    let state = props.dialogsPage

    let dialogElements = state.dialog.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)

    let messagesElement = state.message.map(el => <Message message={el.message} key={el.id}/>)

    let addNewMessage = (values: Values) => {
        props.sendMessage(values.newMessageBody)
    }

    const formik = useFormik({

        initialValues: {
            newMessageBody: ""
        },
        onSubmit: values => {
            addNewMessage(values)
            formik.resetForm()
        },
        validationSchema: Yup.object({
            newPostText: Yup.string()
                .max(30, 'Must be 30 characters or less')
        })
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {dialogElements}
                    </div>
                    <div className={s.messages}>
                        <div>
                            <div>
                                {messagesElement}
                            </div>
                            <textarea name={"newMessageBody"}
                                      placeholder={"Enter you message"}
                                      onChange={formik.handleChange}
                                      value={formik.values.newMessageBody}
                            />
                            {formik.touched.newMessageBody && formik.errors.newMessageBody &&
                                <div style={{color: "red", opacity: "0.8"}}>{formik.errors.newMessageBody}</div>}
                            <div>
                                <Button variant={"contained"} size={"small"} type={"submit"}>SEND</Button>
                            </div>
                        </div>
                    </div>
                </div>


            </form>

        </>
    );
};


