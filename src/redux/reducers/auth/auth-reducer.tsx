import {AnyAction} from "redux";
import {authAPI} from "../../../API/api";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type setUserDataACType = ReturnType<typeof setUserDataAC>

// export type initialStateType = typeof initialState

export type authReducerActionType = setUserDataACType

export type dataType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}

export type loginType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export type cookieType = {
    resultCode: number
    messages: string[],
    data: dataType
}

export type initialStateType = {
    id: number | null
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
}

export const authReducer = (state: initialStateType = initialState, action: authReducerActionType): initialStateType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
                // isAuth: true
            }
        default:
            return state
    }
}

export const setUserDataAC = (id: number | null,
                              email: string | null,
                              login: string | null,
                              isAuth: boolean) => {
    return {
        type: "AUTH/SET-USER-DATA",
        payload: {
            id,
            email,
            login,
            isAuth
        }
        // isAuth: true
    } as const
}

export const getUserData = () => async (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {
    const res = await authAPI.me()
    let {id, email, login} = res.data
    if (res.resultCode === 0) {
        dispatch(setUserDataAC(id, email, login, true))
    }
}

export const login = (formData: loginType) => async (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {
    const res = await authAPI.login(formData)
    if (res.data.resultCode === 0) {
        dispatch(getUserData())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logOut = () => async (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {
    const res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}