import React, {ChangeEvent, useState} from 'react';
import s from "./Profile.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {profileType} from "../../../redux/reducers/profile/profile-reducer";
import userPhoto from "../../../assecs/image/avatarLogo.png";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";

type ProfilePropsType = {
    profile: profileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const ProfileInfo = (props: ProfilePropsType) => {

    let [editMode, setEditMode] = useState(false)

    if (!Object.keys(props.profile).length) {
        return <Preloader/>
    }

    const onChangeSavePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    const goToEditModeHandler = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            {props.profile ?
                <div className={s.descriptionBlock}>
                    <div>

                        <img src={props.profile.photos.large || userPhoto} className={s.userPhoto} alt={"user photo"}/>
                        {props.isOwner &&
                            <div>
                                <label className={s.labelStyle}>
                                    <input type={"file"} onChange={onChangeSavePhoto} style={{display: "none"}}/>
                                    Upload photo
                                </label>
                            </div>

                        }

                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                    </div>
                    {editMode
                        ? <ProfileDataForm profile={props.profile} goToEditModeHandler={goToEditModeHandler}/>
                        : <ProfileData profile={props.profile}
                                       isOwner={props.isOwner}
                                       goToEditMode={goToEditModeHandler}/>}

                    <div></div>

                </div>
                : <Preloader/>
            }

        </div>

    )
};

