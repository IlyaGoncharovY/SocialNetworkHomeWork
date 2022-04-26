import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type profilePropsType = {
    id: string
    message: string
    likeCount: number
}

type postDataPropsType = {
    profilePropsType: profilePropsType[]
}

const Profile = (props: postDataPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts title={"My posts"} postDataPropsType={props.profilePropsType}/>
        </div>
    );
};

export default Profile;