import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";


let rootReducer = combineReducers({
    profileReducer: profileReducer,
    messageReducer: messageReducer
})

export let store = createStore(rootReducer)
