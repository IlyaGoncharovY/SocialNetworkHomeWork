import React from 'react';
import Post from "./Post/Post";

type MyPostsPropsType = {
    title:string
}

const MyPosts = (props:MyPostsPropsType) => {
    return (
        <div>
            {props.title}
            <div>
                <textarea></textarea>
                <button>add post</button>
                <button>post remove</button>
            </div>
            <div className={"posts"}>
                <Post message={"Hello! how are you?"} likeCount = {15}/>
                <Post message ={"Its my first post"} likeCount = {20}/>
            </div>
        </div>
    );
};

export default MyPosts;