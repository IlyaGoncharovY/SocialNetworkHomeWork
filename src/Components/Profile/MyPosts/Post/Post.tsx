import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message:string
    likeCount:string
}

const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src={"https://avatars.mds.yandex.net/i?id=0b973180b7366be0209323d646ec2992-5875897-images-thumbs&n=13"}/>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    );
};

export default Post;