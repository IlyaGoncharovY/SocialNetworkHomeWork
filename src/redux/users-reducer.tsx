export type FollowActionType = ReturnType<typeof followAC>

export type UnfollowActionType = ReturnType<typeof unfollowAC>

export type SetUsersActionType = ReturnType<typeof setUsersAC>

export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>

export type setTotalUsersCountAC = ReturnType<typeof setTotalUsersCountAC>


export type initialStateType = typeof initialState

export type userReducerActionType =
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType |
    setCurrentPageType |
    setTotalUsersCountAC


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
    currentPage: 2
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

        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}

export const unfollowAC = (userID: number) => {
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