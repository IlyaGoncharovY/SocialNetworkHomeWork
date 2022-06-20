// import {/*postsType, profilePageType,*/ reducerAllType} from "./State";


export type AddPostActionType = ReturnType<typeof addPostAC>

export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

export type initialStateType = typeof initialState

export type profileReducerActionType =
    AddPostActionType |
    ChangeNewTextActionType

export type postsType = {
    id: string
    message: string
    likeCount: number
}


let initialState = {
    posts: [
        {id: "1", message: "Hello! how are you?", likeCount: 15},
        {id: "2", message: "Its my first post", likeCount: 20}
    ] as postsType[],
    newPostText: "hello my friends!!!"
}

export const profileReducer = (state: initialStateType = initialState, action: profileReducerActionType):initialStateType => {

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