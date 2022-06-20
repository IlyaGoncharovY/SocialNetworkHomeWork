import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Navbar} from "./Components/Navbar/Navbar";
import {reducerAllType, StateType, store, StoreType} from "./redux/State";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


export type AppPropsType = {
    // appState: StateType
    state: StateType
    store: StoreType
    dispatch: (action: reducerAllType) => void
}


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
                            profilePropsType={props.state.profilePage.posts}
                            dispatch={props.store.dispatch.bind(store)}
                            newPostText={props.state.profilePage.newPostText}
                            store={props.store}
                        />
                        }
                        />
                        <Route path="/dialogs"
                               element={<DialogsContainer
                                   dialogData={props.state.messagePage.dialog}
                                   messageData={props.state.messagePage.message}
                                   newMessageBody={props.state.messagePage.newMessageBody}
                                   store={props.store}
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
