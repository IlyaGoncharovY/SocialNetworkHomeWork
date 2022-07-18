import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {getUserProfile, profileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AuthRedirectComponent} from "../../hoc/AuthRedirectComponent";

type mapStateToPropsType = {
    profile: profileType
    // isAuth: boolean
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

export type profileContainerType = mapStateToPropsType & mapDispatchToPropsType

class ProfileAPIContainer extends Component<profileContainerType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        // if(!this.props.isAuth) return <Redirect to={"./login"}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfile}),
    withRouter, AuthRedirectComponent
)( ProfileAPIContainer)


