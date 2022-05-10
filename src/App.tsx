import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";

import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Navbar} from "./Components/Navbar/Navbar";

/*// начинать с 31 урока.*/

// type profilePropsType = {
//   state:statePropsType[]
// }

export type AppPropsType = {
    appState: statePropsType
    addPost: (postMessage: string)=>void
}

type statePropsType = {
    profilePage: profilePageType
    messagePage: messagePageType

}

type profilePageType = {
    posts: postDataPropsType[]
}

type messagePageType = {
    message: messagePropsType[]
    dialog: dialogsPropsType[]
}

type postDataPropsType = {
    id: string
    message: string
    likeCount: number
}

type dialogsPropsType = {
    id: string
    name: string
}

type messagePropsType = {
    id: string
    message: string
}


const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/profile" element={<Profile profilePropsType={props.appState.profilePage.posts}
                                                                 addPost={props.addPost}/>}/>
                        <Route path="/dialogs"
                               element={<Dialogs dialogData={props.appState.messagePage.dialog}
                                                 messageData={props.appState.messagePage.message}/>}/>
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
