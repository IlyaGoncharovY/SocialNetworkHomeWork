import React, {ChangeEvent, useRef} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {reducerAllType, StoreType} from "../../../redux/State";
import MyPosts from "./MyPosts";
import {store} from "../../../redux/r-store";



type MyPostsPropsType = {
    title: string
    postDataPropsType: postDataPropsType[]
    newPostText: string
    dispatch: (action: reducerAllType) => void
    store: StoreType
}

type postDataPropsType = {
    id: string
    message: string
    likeCount: number
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    // let postsElement = props.postDataPropsType.map(el => <Post message={el.message} likeCount={el.likeCount}
    //                                                            key={el.id}/>)

    let onClickHandlerAddPost = () => {
        props.dispatch(addPostAC(props.newPostText))

    }

    let onChangeHandlerPost = (text: string) => {
      /*  let text = e.currentTarget.value*/
        let action = changeNewTextAC(text)
        store.dispatch(action)
    }

    return (
       <MyPosts
           updateNewPostText={onChangeHandlerPost}
           addPost={onClickHandlerAddPost}
           title={props.title}
           posts={props.store._state.profilePage.posts}
           newPostText={props.store._state.profilePage.newPostText}
       />
    );
};

