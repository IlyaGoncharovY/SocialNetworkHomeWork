import {AnyAction} from "redux";
import {authAPI, securityAPI} from "../../../API/api";
import {ThunkDispatch} from "redux-thunk";

export type setUserDataACType = ReturnType<typeof setUserDataAC>

export type getCaptchaUrlACType = ReturnType<typeof getCaptchaUrlAC>

// export type initialStateType = typeof initialState

export type authReducerActionType = setUserDataACType | getCaptchaUrlACType

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
    captchaUrl: string
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    // isFetching: false
    captchaUrl: ""
}

export const authReducer = (state: initialStateType = initialState, action: authReducerActionType): initialStateType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
                // isAuth: true
            }
        case "AUTH-GET-CAPTCHA":
            return {
                ...state,
                captchaUrl: action.captchaUrl
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

export const getCaptchaUrlAC = (captchaUrl: string) => {
    return {
        type: "AUTH-GET-CAPTCHA",
        captchaUrl
    } as const
}

export const getUserData = () => async (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {
    try {
        const res = await authAPI.me()
        console.log({res})
        let {id, email, login} = res.data.data
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(id, email, login, true))
        }
    } catch (e) {
        console.log({e})
    }
}

export const login = (formData: loginType) => async (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {
    try {
        const res = await authAPI.login(formData)
        if (res.data.resultCode === 0) {
            dispatch(getUserData())
        }
        else if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    } catch (e) {
        console.log({e})
    }
}

export const logOut = () => async (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {
    try {
        const res = await authAPI.logOut()
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
            dispatch(getCaptchaUrlAC(""))
        }
    } catch (e) {
        console.log({e})
    }
}

export const getCaptchaUrl = () => async (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {

    const res = await securityAPI.getCaptcha()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlAC(captchaUrl))

}