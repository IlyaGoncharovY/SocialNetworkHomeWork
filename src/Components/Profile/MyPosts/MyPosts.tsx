import React, {ChangeEvent, useRef} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {postsType, reducerAllType} from "../../../redux/State";


type MyPostsPropsType = {
    title: string
  //  postDataPropsType: postDataPropsType[]
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: postsType[]
    newPostText: string
    // newPostText: string
    // dispatch: (action: reducerAllType) => void
}

// type postDataPropsType = {
//     id: string
//     message: string
//     likeCount: number
// }

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(el => <Post message={el.message} likeCount={el.likeCount}
                                                   key={el.id}/>)

    let onClickHandlerAddPost = () => {
        // props.dispatch(addPostAC(props.newPostText))
        props.addPost()
    }

    let onChangeHandlerPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(changeNewTextAC(e.currentTarget.value))
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