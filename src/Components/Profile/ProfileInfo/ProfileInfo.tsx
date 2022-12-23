import React, {ChangeEvent} from 'react';
import s from "./Profile.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {profileType} from "../../../redux/reducers/profile/profile-reducer";
import userPhoto from "../../../assecs/image/avatarLogo.png";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

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
                        <h2 style={{paddingTop: "20px"}}>{props.profile.fullName}</h2>

                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                    </div>
                    <div>

                        <h3>Description</h3>
                        <div>{props.profile.lookingForAJobDescription}</div>

                    </div>

                    <div></div>

                </div>
                : <Preloader/>
            }

        </div>

    )
};

