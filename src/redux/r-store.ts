import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {userReducer} from "./users-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: userReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
export const store = createStore(rootReducer)

// @ts-ignore
window.store = store


