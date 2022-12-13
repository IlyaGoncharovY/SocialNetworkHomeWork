import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import Navbar from "./Components/Navbar/Navbar";
// import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app/app-reducer";
import {AppStateType, store} from "./redux/r-store";
import {Preloader} from "./Components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));

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
                <div className={"app-wrapper"}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Switch>
                            <Route path={'/profile/:userId?'}
                                   render={withSuspense(ProfileContainer)}/>
                            <Route path="/dialogs"
                                   render={withSuspense(DialogsContainer)}/>
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
let AppContainer = compose(
    // withRouter,
    connect(mapStateToProps,
        {
            initializeApp: initializeApp
        })(App));

export const SocialApp = () => {
    return        <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
