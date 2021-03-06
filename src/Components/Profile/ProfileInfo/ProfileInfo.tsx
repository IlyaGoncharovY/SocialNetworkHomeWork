import React from 'react';
import s from "./Profile.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {profileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfilePropsType = {
    profile: profileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfilePropsType) => {
    // console.log(Object.keys(props.profile))
    if (!Object.keys(props.profile).length) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src={"https://wallpapershome.ru/images/wallpapers/nochnoe-nebo-1920x1080-5k-4k-zvezdi-gori-most-novaya-zelandiya-547.jpg"}*/}
            {/*        alt={"avatar"} width={"600"} height={"400"}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
};

