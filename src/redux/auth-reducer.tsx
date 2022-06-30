export type setUserDataACType = ReturnType<typeof setUserDataAC>

export type initialStateType = typeof initialState

export type authReducerActionType = setUserDataACType

export type dataType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}

export type cookieType ={
    resultCode: number
    messages: string[],
    data: dataType
}
let initialState = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
    // isFetching: false
}

export const authReducer = (state: initialStateType = initialState, action: authReducerActionType): initialStateType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserDataAC = (data: dataType) => {
    return {
        type: "SET-USER-DATA",
        data
    } as const
}