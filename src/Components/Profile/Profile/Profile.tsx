import React from 'react';
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {profileType} from "../../../redux/reducers/profile/profile-reducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/r-store";
import {NavLink} from "react-router-dom";
import {Login} from "../../Login/Login";


type ProfilePropsType = {
    profile: profileType
    status:string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const Profile = React.memo((props: ProfilePropsType) => {

    const login = useSelector<AppStateType, string | null>(state => state.auth.login)

    return (
        <>
            {login ?
                <div>
                    <ProfileInfo profile={props.profile} status={props.status}
                                 updateStatus={props.updateStatus} isOwner={props.isOwner}
                                 savePhoto={props.savePhoto}
                    />
                    <MyPostsContainer/>
                </div> : <Login/>}
        </>


    );
});

export default Profile;