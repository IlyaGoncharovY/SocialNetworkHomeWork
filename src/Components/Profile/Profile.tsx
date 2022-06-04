import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, store} from "../../State/State";

type profilePropsType = {
    id: string
    message: string
    likeCount: number
}

type postDataPropsType = {
    profilePropsType: profilePropsType[]
     newPostText: string
    // newText:string
    dispatch: (action: ActionType) => void
}

const Profile = (props: postDataPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts title={"My posts"}
                     postDataPropsType={props.profilePropsType}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
                    // newText={props.newText}
            />
        </div>
    );
};

export default Profile;