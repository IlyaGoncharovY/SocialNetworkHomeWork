import React from "react";

// export type storeType = {
//     profilePage: profilePage
// }

export const store = {
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
    getState() {
        return this._state
    },
    _callSubscriber(state: any) {
        console.log("hello")
    },
    addPost() {
        let newPost = {
            id: "5",
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ("")
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
       this._state.profilePage.newPostText = newText
       this._callSubscriber(this._state)
    },
    subscribe(observer: (state: any) => void) {
       this._callSubscriber = observer
    }
}
