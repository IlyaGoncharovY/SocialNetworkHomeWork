import React from 'react';
import s from "./preloader.module.css";
import preloader from "../../../assecs/image/1485.gif";

export const Preloader = () => {
    return <div className={s.fetchAnimation}><img src={preloader}/></div>
};

