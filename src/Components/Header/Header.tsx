import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Header.module.css";
import {dataType} from "../../redux/auth-reducer";

type HeaderType = {
    login: string,
    isAuth: boolean
    setAuthUserData: (data: dataType)=>void
}

export const Header = (props:HeaderType) => {
    return (
        <header className={s.header}>
            <img className={s.header_img}
                 src="https://avatars.mds.yandex.net/i?id=3b84ba0a875426c558f8592865b5fa51-5265887-images-thumbs&n=13"
                 alt="avatar"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :<NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};
