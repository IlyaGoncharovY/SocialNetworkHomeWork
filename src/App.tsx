import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Navbar} from "./Components/Navbar/Navbar";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/r-store";
import {Preloader} from "./Components/common/Preloader/Preloader";

type AppType = mapStateToPropsType & mapDispatchToProps

class App extends React.Component<AppType, any> {

    componentDidMount() {
       this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className={"app-wrapper"}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Switch>
                            <Route path={'/profile/:userId?'}
                                   render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}/>
                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>
                            <Route path="/login"
                                   render={() => <Login/>}/>
                            <Route path="/news"
                                   render={() => <News/>}/>
                            <Route path="/music"
                                   render={() => <Music/>}/>
                            <Route path="/settings"
                                   render={() => <Settings/>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

type mapStateToPropsType = {
    initialized: boolean
}

type mapDispatchToProps = {
    initializeApp: () => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}
export default compose(
    // withRouter,
    connect(mapStateToProps,
        {
            initializeApp: initializeApp
        })(App));
