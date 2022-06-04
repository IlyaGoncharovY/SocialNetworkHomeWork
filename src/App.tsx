import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";

import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Navbar} from "./Components/Navbar/Navbar";
import {ActionType, StateType, StoreType} from "./State/State";

export type AppPropsType = {
    appState: StateType
    store: StoreType
    dispatch: (action: ActionType)=>void
}

// type statePropsType = {
//     profilePage: profilePageType
//     messagePage: messagePageType
//
// }
//
// type profilePageType = {
//     posts: postDataPropsType[],
//     newPostText:string
// }
//
// type messagePageType = {
//     message: messagePropsType[]
//     dialog: dialogsPropsType[]
// }
//
// type postDataPropsType = {
//     id: string
//     message: string
//     likeCount: number
// }
//
// type dialogsPropsType = {
//     id: string
//     name: string
// }
//
// type messagePropsType = {
//     id: string
//     message: string
// }


const App = (props: AppPropsType) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/profile" element={<Profile
                            profilePropsType={state.profilePage.posts}
                            dispatch={props.store.dispatch.bind(props.store)}
                            newPostText={state.profilePage.newPostText}
                         />
                        }
                        />
                        <Route path="/dialogs"
                               element={<Dialogs dialogData={props.appState.messagePage.dialog}
                                                 messageData={props.appState.messagePage.message}
                               />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
