import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
// import {reducerAllType, StoreType} from "../../redux/State";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

// type profilePropsType = {
//     id: string
//     message: string
//     likeCount: number
// }
//
// type postDataPropsType = {
//     store: StoreType
//     profilePropsType: profilePropsType[]
//     newPostText: string
//     dispatch: (action: reducerAllType) => void
// }

const Profile = (/*props: postDataPropsType*/) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                //title={"My posts"}
                // store={props.store}
                // postDataPropsType={props.profilePropsType}
                // newPostText={props.newPostText}
                // dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;