import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Navbar} from "./Components/Navbar/Navbar";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {Users} from "./Components/Users/Users";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/profile"
                               element={<ProfileContainer/>}/>
                        <Route path="/dialogs"
                               element={<DialogsContainer/>}/>
                        <Route path="/users"
                               element={<UsersContainer/>}/>
                        <Route path="/news"
                               element={<News/>}/>
                        <Route path="/music"
                               element={<Music/>}/>
                        <Route path="/settings"
                               element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
