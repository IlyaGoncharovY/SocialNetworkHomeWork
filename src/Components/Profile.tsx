import React from 'react';
import "./Profile.css";

const Profile = () => {
    return (
        <div className={"content"}>
            <div>
                <img
                    src={"https://wallpapershome.ru/images/wallpapers/nochnoe-nebo-1920x1080-5k-4k-zvezdi-gori-most-novaya-zelandiya-547.jpg"}
                    alt={"avatar"} width={"600"} height={"400"}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={"posts"}>
                    <div className={"item"}>
                        post 1
                    </div>
                    <div className={"item"}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;