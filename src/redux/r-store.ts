import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {userReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
export const store = createStore(rootReducer)

// @ts-ignore
window.store = store


