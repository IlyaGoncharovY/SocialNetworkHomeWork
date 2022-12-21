import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {
    getStatus,
    getUserProfile,
    initialStateProfileType,
    profileType,
    savePhoto,
    updateStatus
} from "../../redux/reducers/profile/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type mapStateToPropsType = {
    profile: profileType
    status: string
    isAuth: boolean
    logUserId: number | null
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string | undefined) => void
    savePhoto: (file: File) => void
}

export type profileContainerType = mapStateToPropsType & mapDispatchToPropsType

class ProfileAPIContainer extends Component<profileContainerType & RouteComponentProps<{ userId: string }>> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.logUserId)
            //----
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<profileContainerType & RouteComponentProps<{ userId: string }>>, prevState: initialStateProfileType, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        // if(!this.props.isAuth) return <Redirect to={"./login"}/>

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
            />
        );
    };
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    // isAuth: state.auth.isAuth
    logUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfile,
        getStatus: getStatus,
        updateStatus: updateStatus,
        savePhoto: savePhoto
    }),
    withRouter,
    // AuthRedirectComponent
)(ProfileAPIContainer)


