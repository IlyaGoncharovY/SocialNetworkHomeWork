import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {store} from "../../State/State";

type profilePropsType = {
    id: string
    message: string
    likeCount: number
}

type postDataPropsType = {
    profilePropsType: profilePropsType[]
    updateNewPostText: (updateNewPostText: string) => void
    newPostText: string
    addPost: (postMessage: string) => void
}

const Profile = (props: postDataPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts title={"My posts"}
                     postDataPropsType={props.profilePropsType}
                     newPostText={props.newPostText}
                     // addPost={store.addPost.bind(store)}
                     //addPost={props.addPost}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;