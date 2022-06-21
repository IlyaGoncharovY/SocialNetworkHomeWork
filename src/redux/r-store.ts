import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
export const store = createStore(rootReducer)

// @ts-ignore
window.store = store


