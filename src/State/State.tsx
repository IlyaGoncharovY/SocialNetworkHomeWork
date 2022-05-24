import React from "react";
import {renderThree} from "../render";


export let state = {
    profilePage: {
        posts: [
            {id: "1", message: "Hello! how are you?", likeCount: 15},
            {id: "2", message: "Its my first post", likeCount: 20}

        ],
        newPostText: "hello my friends!!!"
    },
    messagePage: {
        message: [
            {id: "1", message: "hello"},
            {id: "2", message: "ho ho ho"},
            {id: "3", message: "vnature"},
        ],
        dialog: [
            {id: "1", name: "Ilya"},
            {id: "2", name: "Nastya"},
            {id: "3", name: "Varya"},
            {id: "4", name: "Aiki"}
        ]
    },
}

export let addPost = () => {
    let newPost = {
        id: "5",
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ("")
    renderThree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderThree(state)
}