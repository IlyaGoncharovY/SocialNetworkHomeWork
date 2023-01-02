import React from 'react';
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {profileType} from "../../../redux/reducers/profile/profile-reducer";


type ProfilePropsType = {
    profile: profileType
    status:string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const Profile = React.memo((props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
});

export default Profile;