import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header_img}
                src="https://avatars.mds.yandex.net/i?id=3b84ba0a875426c558f8592865b5fa51-5265887-images-thumbs&n=13"
                alt="avatar"/>
        </header>
    );
};

export default Header;