import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile/profile-reducer";
import {dialogsReducer} from "./reducers/dialig/dialogs-reducer";
import {userReducer} from "./reducers/users/users-reducer";
import {authReducer} from "./reducers/auth/auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk"
import {useDispatch} from "react-redux";
import {appReducer} from "./reducers/app/app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store


