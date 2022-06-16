import React, {ChangeEvent, useRef} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {reducerAllType} from "../../../redux/State";


type MyPostsPropsType = {
    title: string
    postDataPropsType: postDataPropsType[]
    newPostText: string
    dispatch: (action: reducerAllType) => void
}

type postDataPropsType = {
    id: string
    message: string
    likeCount: number
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.postDataPropsType.map(el => <Post message={el.message} likeCount={el.likeCount}
                                                               key={el.id}/>)

    let onClickHandlerAddPost = () => {
        props.dispatch(addPostAC(props.newPostText))

    }

    let onChangeHandlerPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.postBlock}>
            <h3>{props.title}</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandlerPost} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onClickHandlerAddPost}>add post</button>
                </div>
                <div>
                    <button>post remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;