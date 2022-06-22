export type FollowActionType = ReturnType<typeof followAC>

export type UnfollowActionType = ReturnType<typeof unfollowAC>

export type SetUsersActionType = ReturnType<typeof setUsersAC>

export type initialStateType = typeof initialState

export type userReducerActionType =
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType


export type usersType = {
    id: string
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

type locationType = {
    city: string
    country: string
}


let initialState = {
    users: [
        // {
        //     id: "1",
        //     photoUrl: "https://avatars.mds.yandex.net/i?id=5670781580e23d3e5e3bc06646d52ede-7017675-images-thumbs&n=13",
        //     followed: false,
        //     fullName: "Ilya",
        //     status: "Hello world 1 !",
        //     location: {city: "Moscow", country: "Russia"}
        // },
        // {
        //     id: "2",
        //     photoUrl: "https://avatars.mds.yandex.net/i?id=5670781580e23d3e5e3bc06646d52ede-7017675-images-thumbs&n=13",
        //     followed: true,
        //     fullName: "Anastasia",
        //     status: "Hello world 2 !",
        //     location: {city: "Moscow", country: "Russia"}
        // },
        // {
        //     id: "3",
        //     photoUrl: "https://avatars.mds.yandex.net/i?id=5670781580e23d3e5e3bc06646d52ede-7017675-images-thumbs&n=13",
        //     followed: true,
        //     fullName: "Varvara",
        //     status: "Hello world 3 !",
        //     location: {city: "Moscow", country: "Russia"}
        // },
        // {
        //     id: "4",
        //     photoUrl: "https://avatars.mds.yandex.net/i?id=5670781580e23d3e5e3bc06646d52ede-7017675-images-thumbs&n=13",
        //     followed: false,
        //     fullName: "Aiki",
        //     status: "Hello world 4 !",
        //     location: {city: "Moscow", country: "Russia"}
        // }
    ] as usersType[]
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
        case "SETUSERS":
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID: string) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}

export const unfollowAC = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const setUsersAC = (users: any) => {
    return {
        type: "SETUSERS",
        users
    } as const
}