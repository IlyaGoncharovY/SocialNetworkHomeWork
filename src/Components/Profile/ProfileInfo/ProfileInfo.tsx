import React from 'react';
import s from "./Profile.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://wallpapershome.ru/images/wallpapers/nochnoe-nebo-1920x1080-5k-4k-zvezdi-gori-most-novaya-zelandiya-547.jpg"}
                    alt={"avatar"} width={"600"} height={"400"}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
};

