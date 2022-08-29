import React from "react";
import {addPostAC, deletePostAC, initialStateType, postsType, profileReducer, profileType} from "./profile-reducer";

let initialState: initialStateType = {
    posts: [
        {id: "1", message: "Hello! how are you?", likeCount: 15},
        {id: "2", message: "Its my first post", likeCount: 20}
    ] as postsType[],
    newPostText: "hello my friends!!!",
    profile: {} as profileType,
    status: ""
}

test("new post added", ()=>{

    let newState = profileReducer(initialState,addPostAC("hello!"))

    expect(newState.posts.length).toBe(3)
})

test("new post added/message", ()=>{

    let newState = profileReducer(initialState,addPostAC("hello!"))

    expect(newState.posts[2].message).toBe("hello!")
})

test("test delete post", ()=>{

    let newState = profileReducer(initialState,deletePostAC("2"))

    expect(newState.posts.length).toBe(1)
})

test("test correct delete post", ()=>{

    let newState = profileReducer(initialState,deletePostAC("9999"))

    expect(newState.posts.length).toBe(2)
})
