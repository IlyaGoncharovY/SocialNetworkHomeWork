import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

type MyPostsPropsType = {
    title:string
}

const MyPosts = (props:MyPostsPropsType) => {
    return (
        <div className={s.postBlock}>
           <h3>{props.title}</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>add post</button>
                </div>
                <div>
                <button>post remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={"Hello! how are you?"} likeCount = {15}/>
                <Post message ={"Its my first post"} likeCount = {20}/>
            </div>
        </div>
    );
};

export default MyPosts;