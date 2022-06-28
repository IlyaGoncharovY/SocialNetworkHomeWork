export type AddPostActionType = ReturnType<typeof addPostAC>

export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

export type setUserProfileACType = ReturnType<typeof setUserProfileAC>

export type initialStateType = typeof initialState

export type profileReducerActionType =
    AddPostActionType |
    ChangeNewTextActionType |
    setUserProfileACType


export type postsType = {
    id: string
    message: string
    likeCount: number
}

export type profileType = {
    aboutMe: string,
    contacts: profileContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: profilePhotoType
}

type profileContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

type profilePhotoType = {
    small: string
    large: string
}

let initialState = {
    posts: [
        {id: "1", message: "Hello! how are you?", likeCount: 15},
        {id: "2", message: "Its my first post", likeCount: 20}
    ] as postsType[],
    newPostText: "hello my friends!!!",
    profile: {} as profileType
}

export const profileReducer = (state: initialStateType = initialState, action: profileReducerActionType): initialStateType => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost: postsType = {
                id: "5",
                message: action.postText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
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

export const changeNewTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}

export const setUserProfileAC = (profile: profileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}