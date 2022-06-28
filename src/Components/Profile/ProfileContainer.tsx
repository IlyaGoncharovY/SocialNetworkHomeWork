import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {profileType, setUserProfileAC} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

type mapStateToPropsType = {
    profile: profileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: profileType) => void
}

export type profileContainerType = mapStateToPropsType & mapDispatchToPropsType

function withRouter(Component:any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export class ProfileAPIContainer extends React.Component<profileContainerType, any> {

    componentDidMount() {
        let userId = this.props.profile.userId
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
           // <div>
                <Profile {...this.props}  profile={this.props.profile}/>
           // </div>
        );
    };
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile
})



 let withUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(withRouter(withUrlDataContainerComponent))

