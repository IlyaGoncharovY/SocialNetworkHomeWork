import React from 'react';
import {addPostAC, changeNewTextAC, postsType} from "../../../redux/profile-reducer";
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
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);