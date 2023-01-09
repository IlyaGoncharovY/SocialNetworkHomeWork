import React from 'react';
import {addPostAC, deletePostAC, postsType} from "../../../redux/reducers/profile/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/r-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: postsType[]
    newPostText: string
    title: string
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    removePost: (postId: string) => void
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
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        removePost: (postId: string) => {
            dispatch(deletePostAC(postId))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);