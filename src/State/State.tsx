import React from "react";

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
    dispatch: (action: ActionType) => void
}

export type StateType = {
    profilePage: profilePageType
    messagePage: messagePageType
}

type profilePageType = {
    posts: postsType[]
    newPostText: string
}

export type postsType = {
    id: string
    message: string
    likeCount: number
}

type messagePageType = {
    message: messageType[]
    dialog: dialogType[]
}

type messageType = {
    id: string
    message: string
}

type dialogType = {
    id: string
    name: string
}

// export type AddPostActionType = {
//     type: "ADD-POST",
//     postText: string
// }
export type AddPostActionType = ReturnType<typeof addPostAC>

// export type ChangeNewTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT",
//     newText: string
// }
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

export type ActionType = AddPostActionType | ChangeNewTextActionType

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText
    } as const
}

export const changeNewTextAC = ( newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}

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
            ]
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

    dispatch(action: ActionType) {
        if (action.type === "ADD-POST") {
            let newPost: postsType = {
                id: "5",
                message: action.postText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ("")
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    }
}
