import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {containerPostType} from "./MyPostsContainer";


const MyPosts = (props: containerPostType) => {
    let postsElement = props.posts.map(el => <Post message={el.message} likeCount={el.likeCount}
                                                   key={el.id}/>)


    let onClickHandlerAddPost = () => {
        props.addPost(props.newPostText)
    }

    let onChangeHandlerPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
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