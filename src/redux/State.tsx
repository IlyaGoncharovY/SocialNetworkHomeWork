import React from "react";
import {AddPostActionType, ChangeNewTextActionType, profileReducer} from "./profile-reducer";
import {messageReducer, NewMessageBodyActionType, SendMessageActionType} from "./message-reducer";


export type StoreType = {
    _state: StateType,
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: reducerAllType) => void
}

export type StateType = {
    profilePage: profilePageType
    messagePage: messagePageType
}

export type profilePageType = {
    posts: postsType[]
    newPostText: string
}

export type postsType = {
    id: string
    message: string
    likeCount: number
}

export type messagePageType = {
    message: messageType[]
    dialog: dialogType[]
    newMessageBody:string
}

type messageType = {
    id: string
    message: string
}

type dialogType = {
    id: string
    name: string
}

export type reducerAllType = AddPostActionType |
    ChangeNewTextActionType |
    NewMessageBodyActionType |
    SendMessageActionType

export const store: StoreType = {
    _state: {
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
            ],
            newMessageBody: ""
        },
    },
    _callSubscriber() {
        console.log("hello")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: reducerAllType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)

        this._callSubscriber()
    }
}
