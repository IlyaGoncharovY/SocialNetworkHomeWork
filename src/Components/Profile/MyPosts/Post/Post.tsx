import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src={"https://avatars.mds.yandex.net/i?id=0b973180b7366be0209323d646ec2992-5875897-images-thumbs&n=13"}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;