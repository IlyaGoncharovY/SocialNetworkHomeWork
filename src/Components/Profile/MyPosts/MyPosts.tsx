import React, {useRef, useState} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

type MyPostsPropsType = {
    title: string
    postDataPropsType: postDataPropsType[]
    addPost:(postMessage: string)=>void
}

type postDataPropsType = {
    id: string
    message: string
    likeCount: number
}

// const postData = [
//     {id: "1", message: "Hello! how are you?", likeCount: 15},
//     {id: "2", message: "Its my first post", likeCount: 20}
//
// ]


const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.postDataPropsType.map(el => <Post message={el.message} likeCount={el.likeCount}
                                                               key={el.id}/>)

  //  let [message, setMessage] = useState<string>()

    let newPostElement = useRef<HTMLTextAreaElement>(null);

    let onClickHandlerAddPost = () => {
        debugger
        let text = newPostElement.current;
        if(text) {
            props.addPost(text.value)
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>{props.title}</h3>
            <div>
                <div>
                    {/*<input ref={newPostElement}></input>*/}
                    <textarea ref={newPostElement}/>
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
                {/*<Post message={postData[0].message} likeCount = {postData[0].likeCount}/>*/}
                {/*<Post message ={postData[1].message} likeCount = {postData[1].likeCount}/>*/}
            </div>
        </div>
    );
};

export default MyPosts;