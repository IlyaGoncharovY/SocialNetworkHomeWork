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
import {reducerAllType, StateType, StoreType} from "./redux/State";
import {store} from "./redux/r-store";


export type AppPropsType = {
    // appState: StateType
    // store: StoreType
    // dispatch: (action: reducerAllType)=>void
}


const App = (props: AppPropsType) => {
    const state = store.getState()
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/profile" element={<Profile
                            profilePropsType={state.profileReducer.posts}
                            dispatch={store.dispatch.bind(store)}
                            newPostText={state.profileReducer.newPostText}
                         />
                        }
                        />
                        <Route path="/dialogs"
                               element={<Dialogs dialogData={state.messageReducer.dialog}
                                                 messageData={state.messageReducer.message}
                                                 newMessageBody={state.messageReducer.newMessageBody}

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
