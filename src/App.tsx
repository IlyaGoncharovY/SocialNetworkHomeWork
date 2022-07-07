import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Navbar} from "./Components/Navbar/Navbar";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";

const App = () => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                        {/*<Route path="/"*/}
                        {/*       render={() =><Redirect to={'/profile'}/>}/>*/}
                        <Route path={'/profile/:userId?'}
                               render={() =><ProfileContainer/>}/>
                        <Route path="/dialogs"
                               render={() =><DialogsContainer/>}/>
                        <Route path="/users"
                               render={() =><UsersContainer/>}/>
                        <Route path="/login"
                               render={()=><Login/>}/>
                        <Route path="/news"
                               render={() =><News/>}/>
                        <Route path="/music"
                               render={() =><Music/>}/>
                        <Route path="/settings"
                               render={() =><Settings/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
