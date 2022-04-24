import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

type MyPostsPropsType = {
    title: string
}

const postData = [
    {id: "1", message: "Hello! how are you?", likeCount: 15},
    {id: "2", message: "Its my first post", likeCount: 20}

]

let postsElement = postData.map(el => <Post message={el.message} likeCount={el.likeCount} key={el.id}/>)

const MyPosts = (props: MyPostsPropsType) => {
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
                {postsElement}
                {/*<Post message={postData[0].message} likeCount = {postData[0].likeCount}/>*/}
                {/*<Post message ={postData[1].message} likeCount = {postData[1].likeCount}/>*/}
            </div>
        </div>
    );
};

export default MyPosts;