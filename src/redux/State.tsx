import React from "react";
import {AddPostActionType, ChangeNewTextActionType, profileActionType, profileReducer} from "./profile-reducer";
import {messageActionType, messageReducer, NewMessageBodyActionType, SendMessageActionType} from "./message-reducer";

// export type storeType = {
//     profilePage: profilePage
// }

export type StoreType = {

    _state: StateType,
    // updateNewPostText: (newText: string) => void
    // addPost: (postText: string) => void
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

export type reducerAllType = AddPostActionType | ChangeNewTextActionType | NewMessageBodyActionType | SendMessageActionType

// export type AddPostActionType = {
//     type: "ADD-POST",
//     postText: string
// }
// export type AddPostActionType = ReturnType<typeof addPostAC>
//
// // export type ChangeNewTextActionType = {
// //     type: "UPDATE-NEW-POST-TEXT",
// //     newText: string
// // }
// export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

// export type NewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
//
// export type SendMessageActionType = ReturnType<typeof sendMessageAC>
//
// export type ActionType =/* AddPostActionType | ChangeNewTextActionType*/ | NewMessageBodyActionType | SendMessageActionType

// export const addPostAC = (postText: string) => {
//     return {
//         type: "ADD-POST",
//         postText
//     } as const
// }
//
// export const changeNewTextAC = ( newText: string) => {
//     return {
//         type: "UPDATE-NEW-POST-TEXT",
//         newText
//     } as const
// }

// export const updateNewMessageBodyAC = (newMessageBody: string) => {
//     return {
//         type: "UPDATE-NEW-MESSAGE-BODY",
//         newMessageBody
//     } as const
// }
//
// export const sendMessageAC = () => {
//     return {
//         type: "SEND-MESSAGE"
//     } as const
// }

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
