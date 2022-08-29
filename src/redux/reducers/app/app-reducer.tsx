import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {getUserData} from "../auth/auth-reducer";


export type initialStateType = typeof initialState

export type authReducerActionType = setInitializedACType

let initialState = {
    initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: authReducerActionType): initialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

type setInitializedACType = ReturnType<typeof setInitializedAC>

export const setInitializedAC = () => {
    return {
        type: "SET-INITIALIZED"
    } as const
}

export const initializeApp = () => (dispatch: ThunkDispatch<any, undefined, AnyAction>) => {

    Promise.all([dispatch(getUserData())])
        .then(() => {
            dispatch(setInitializedAC())
        })
}
