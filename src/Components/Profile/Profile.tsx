import React, {memo} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profileType} from "../../redux/reducers/profile/profile-reducer";


type ProfilePropsType = {
    profile: profileType
    status:string
    updateStatus: (status: string) => void
}

const Profile = React.memo((props: ProfilePropsType) => {
    console.log("render profile")
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
});

export default Profile;