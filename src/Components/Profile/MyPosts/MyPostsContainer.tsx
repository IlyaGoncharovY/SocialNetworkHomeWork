import React, {ChangeEvent, useRef} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostAC, changeNewTextAC, initialStateType, postsType} from "../../../redux/profile-reducer";
// import {reducerAllType, StateType, StoreType} from "../../../redux/State";
import MyPosts from "./MyPosts";
import {AppStateType/*, store*/} from "../../../redux/r-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


//
// type MyPostsPropsType = {
//     title: string
//     postDataPropsType: postDataPropsType[]
//     newPostText: string
//     dispatch: (action: reducerAllType) => void
//     store: StoreType
// }
//
// type postDataPropsType = {
//     id: string
//     message: string
//     likeCount: number
// }
//
// export const MyPostsContainer = (props: MyPostsPropsType) => {
//
//     // let postsElement = props.postDataPropsType.map(el => <Post message={el.message} likeCount={el.likeCount}
//     //                                                            key={el.id}/>)
//
//     let onClickHandlerAddPost = () => {
//         props.dispatch(addPostAC(props.newPostText))
//
//     }
//
//     let onChangeHandlerPost = (text: string) => {
//       /*  let text = e.currentTarget.value*/
//         let action = changeNewTextAC(text)
//         store.dispatch(action)
//     }
//
//     return (
//        <MyPosts
//            updateNewPostText={onChangeHandlerPost}
//            addPost={onClickHandlerAddPost}
//            title={props.title}
//            posts={props.store._state.profilePage.posts}
//            newPostText={props.store._state.profilePage.newPostText}
//        />
//     );
// };

type mapStateToPropsType = {
    posts: postsType[]
    newPostText: string
    title: string
}

type mapDispatchToPropsType = {
    addPost: (postText: string) => void
    updateNewPostText: (text: string) => void
}

export type containerPostType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        // posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText,
        // title: ""
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
        title: "My posts"
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postText: string) => {
            // dispatch(addPostAC(props.newPostText))
            dispatch(addPostAC(postText))
        },
        updateNewPostText: (text: string) => {
            /*  let text = e.currentTarget.value*/
            let action = changeNewTextAC(text)
            dispatch(action)
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);