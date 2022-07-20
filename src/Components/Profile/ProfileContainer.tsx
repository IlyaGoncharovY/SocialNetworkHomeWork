import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {getStatus, getUserProfile, profileType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AuthRedirectComponent} from "../../hoc/AuthRedirectComponent";

type mapStateToPropsType = {
    profile: profileType
    status: string
    // isAuth: boolean
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string | undefined) => void
}

export type profileContainerType = mapStateToPropsType & mapDispatchToPropsType

class ProfileAPIContainer extends Component<profileContainerType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 23589
        }
        this.props.getUserProfile(userId)
        // setTimeout(() => {
            this.props.getStatus(userId)
        // }, 1000)
    }

    render() {

        // if(!this.props.isAuth) return <Redirect to={"./login"}/>

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        );
    };
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
    // isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfile,
        getStatus: getStatus,
        updateStatus: updateStatus
    }),
    withRouter,
    // AuthRedirectComponent
)(ProfileAPIContainer)


