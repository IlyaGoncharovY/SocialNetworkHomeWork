import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {


    return (
        <div>
            <div>
                <img
                    src={"https://wallpapershome.ru/images/wallpapers/nochnoe-nebo-1920x1080-5k-4k-zvezdi-gori-most-novaya-zelandiya-547.jpg"}
                    alt={"avatar"} width={"600"} height={"400"}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts title={"My posts"} />
        </div>
    );
};

export default Profile;