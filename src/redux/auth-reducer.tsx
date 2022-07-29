import {AnyAction} from "redux";
import {authAPI} from "../API/api";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type setUserDataACType = ReturnType<typeof setUserDataAC>

export type initialStateType = typeof initialState

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

export const setUserDataAC = (isAuth: boolean, data: dataType) => {
    return {
        type: "SET-USER-DATA",
        data,
        // isAuth: true
    } as const
}

export const getUserData = () => (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                // let {id, login, email} = response.data
                dispatch(setUserDataAC(true, response.data))
            }
        })
}


export const login = (formData: loginType) => (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {


    authAPI.login(formData.email, formData.password, formData.rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData())
            } else {
               let message = response.data.messages.length > 0 ? response.data.messages[0]: "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}

export const logOut = () => (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {
    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData())
            }
        })
}