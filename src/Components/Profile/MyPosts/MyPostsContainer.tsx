import React from 'react';
import {addPostAC, changeNewTextAC, postsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/r-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

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
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
        title: "My posts"
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
        updateNewPostText: (text: string) => {
            let action = changeNewTextAC(text)
            dispatch(action)
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);