import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsPropsType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogsPropsType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}