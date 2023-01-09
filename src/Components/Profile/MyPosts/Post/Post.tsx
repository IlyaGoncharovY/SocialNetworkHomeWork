import React from 'react';
import s from "./Post.module.css";
import Button from "@mui/material/Button";
import {useAppDispatch} from "../../../../redux/r-store";
import {deletePostAC} from "../../../../redux/reducers/profile/profile-reducer";

type PostPropsType = {
    message: string
    likeCount: number
    postId: string
}

const Post = (props: PostPropsType) => {

    const dispatch = useAppDispatch()

    const removePost = () => {
        dispatch(deletePostAC(props.postId))
    }

    return (
        <div className={s.item}>
            <img
                src={"https://avatars.mds.yandex.net/i?id=0b973180b7366be0209323d646ec2992-5875897-images-thumbs&n=13"} alt={"user avatar"}/>
            {props.message}
            <div>
                <div>
                    <Button variant={"contained"} size={"small"} color={"warning"} onClick={removePost}>REMOVE POST</Button>
                </div>
                <span>like</span>{props.likeCount}
            </div>
        </div>
    );
};

export default Post;