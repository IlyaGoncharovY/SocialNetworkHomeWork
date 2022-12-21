import {Dispatch} from "redux";
import {profileAPI} from "../../../API/api";

export type AddPostActionType = ReturnType<typeof addPostAC>

export type deletePostACType = ReturnType<typeof deletePostAC>
// export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

export type setUserProfileACType = ReturnType<typeof setUserProfileAC>

export type setStatusACType = ReturnType<typeof setStatusAC>

export type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>

export type initialStateProfileType = typeof initialState

export type profileReducerActionType =
    AddPostActionType |
    // ChangeNewTextActionType |
    setUserProfileACType |
    setStatusACType |
    deletePostACType |
    savePhotoSuccessType


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

export type profilePhotoType = {
    small: string
    large: string
}

let initialState = {
    posts: [
        {id: "1", message: "Hello! how are you?", likeCount: 15},
        {id: "2", message: "Its my first post", likeCount: 20}
    ] as postsType[],
    newPostText: "hello my friends!!!",
    profile: {} as profileType,
    status: ""
}

export const profileReducer = (state: initialStateProfileType = initialState, action: profileReducerActionType): initialStateProfileType => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost: postsType = {
                id: "5",
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case "DELETE-POST": {
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.postId)
            }
        }
        // case "UPDATE-NEW-POST-TEXT": {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        // }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }

        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }

        case "PROFILE/SAVE-PHOTO-SUCCESS": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

export const deletePostAC = (postId: string) => {
    return {
        type: "DELETE-POST",
        postId
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

export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}

export const savePhotoSuccess = (photos: profilePhotoType) => {
    return {
        type: "PROFILE/SAVE-PHOTO-SUCCESS",
        photos
    } as const
}

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {

    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(res.data))
}
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {

    const res = await profileAPI.getUserStatus(userId)
    dispatch(setStatusAC(res.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {

    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}
