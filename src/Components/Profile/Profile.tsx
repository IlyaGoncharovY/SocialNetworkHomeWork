import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {reducerAllType} from "../../redux/State";

type profilePropsType = {
    id: string
    message: string
    likeCount: number
}

type postDataPropsType = {
    profilePropsType: profilePropsType[]
     newPostText: string
    dispatch: (action: reducerAllType) => void
}

const Profile = (props: postDataPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts title={"My posts"}
                     postDataPropsType={props.profilePropsType}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;