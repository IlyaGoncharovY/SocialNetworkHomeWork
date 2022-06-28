import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {profileType, setUserProfileAC} from "../../redux/profile-reducer";

type mapStateToPropsType = {
    profile: profileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: profileType) => void
}

export type profileContainerType = mapStateToPropsType & mapDispatchToPropsType

export class ProfileAPIContainer extends React.Component<profileContainerType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}  profile={this.props.profile}/>
            </div>
        );
    };
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile
})

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(ProfileAPIContainer)

