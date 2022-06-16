import {postsType, profilePageType, reducerAllType} from "./State";


export type AddPostActionType = ReturnType<typeof addPostAC>

// export type ChangeNewTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT",
//     newText: string
// }
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

export type profileActionType = AddPostActionType | ChangeNewTextActionType

export const profileReducer = (state: profilePageType, action: reducerAllType):profilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: postsType = {
                id: "5",
                message: action.postText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ("")
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

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