import React, {ChangeEvent} from 'react';
import s from "./Profile.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {profileType} from "../../../redux/reducers/profile/profile-reducer";
import userPhoto from "../../../assecs/image/avatarLogo.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfilePropsType = {
    profile: profileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const ProfileInfo = (props: ProfilePropsType) => {
    // console.log(Object.keys(props.profile))
    if (!Object.keys(props.profile).length) {
        return <Preloader/>
    }

    const onChangeSavePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div>
            {props.profile ?
                <div className={s.descriptionBlock}>

                    <img src={props.profile.photos.large || userPhoto} className={s.userPhoto} alt={"user photo"}/>

                    {props.isOwner && <input type={"file"} onChange={onChangeSavePhoto}/>}

                    <div>{props.profile.fullName}</div>

                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                    <h3>Description</h3>

                    <div>{props.profile.lookingForAJobDescription}</div>


                </div>
                : <Preloader/>
            }

        </div>

    )
};

