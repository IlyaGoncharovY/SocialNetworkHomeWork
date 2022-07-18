
import {Dispatch} from "redux";
import {usersAPI} from "../API/api";

export type FollowActionType = ReturnType<typeof followSuccessAC>

export type UnfollowActionType = ReturnType<typeof unfollowSuccessAC>

export type SetUsersActionType = ReturnType<typeof setUsersAC>

export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

export type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>

export type toggleIsFollowingACType = ReturnType<typeof toggleIsFollowingAC>

export type initialStateType = typeof initialState

export type userReducerActionType =
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType |
    setCurrentPageType |
    setTotalUsersCountACType |
    setIsFetchingACType |
    toggleIsFollowingACType


export type usersType = {
    // id: string
    // photoUrl:string
    // followed: boolean
    // fullName: string
    // status: string
    // location: locationType
    name: string
    id: number
    uniqueUrlName: null
    photos: photosType
    status: null
    followed: boolean
    totalCount: number
    error: null
}

type photosType = {
    small: null
    large: null
}
// type locationType = {
//     city: string
//     country: string
// }

let initialState = {
    users: [] as usersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [1, 2, 3]
}

export const userReducer = (state: initialStateType = initialState, action: userReducerActionType): initialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(el => {
                    if (el.id === action.userID) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(el => {
                    if (el.id === action.userID) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case "SET-USERS":
            return {
                ...state, users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el != action.userId)
            }
        default:
            return state
    }
}

export const followSuccessAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}

export const unfollowSuccessAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const setUsersAC = (users: any) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount
    } as const
}

export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}

export const toggleIsFollowingAC = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING",
        isFetching,
        userId
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
                dispatch(setCurrentPageAC(currentPage))
            })
    }
}

export const follow = (userId: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccessAC(userId))
                }
                dispatch(toggleIsFollowingAC(false, userId))
            })
    }
}
export const unFollow = (userId: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(true, userId))
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccessAC(userId))
                }
                dispatch(toggleIsFollowingAC(false, userId))
            })
    }
}