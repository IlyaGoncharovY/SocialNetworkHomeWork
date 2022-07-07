import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {profileType, setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type mapStateToPropsType = {
    profile: profileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: profileType) => void
}

export type profileContainerType = mapStateToPropsType & mapDispatchToPropsType

class ProfileAPIContainer extends Component<profileContainerType & RouteComponentProps<{userId: string}>> {

    componentDidMount() {
        console.log(this.props)
        let userId = +this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
                <Profile {...this.props}  profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfile: setUserProfileAC}),
    withRouter,
)(ProfileAPIContainer)


