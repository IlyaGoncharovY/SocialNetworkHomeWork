import React from 'react';
import {Contact} from "../Contacts/Contact";
import {profileContactsType, profileType} from "../../../../redux/reducers/profile/profile-reducer";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/r-store";

type ProfileDataType = {
    profile: profileType
    isOwner: boolean
    goToEditMode: ()=>void
}

export const ProfileData = (props: ProfileDataType) => {

    const login = useSelector<AppStateType, string | null>(state => state.auth.login)

    return (
        <div>
            <h3>Description</h3>
            {props.isOwner && login && <div>
                <Button variant={"contained"} size={"small"} onClick={props.goToEditMode}>edit</Button>
            </div>}
            <div style={{paddingTop: "20px"}}><b>Name</b>: {props.profile.fullName}</div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            { props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Abut me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(el => {
                return <Contact key={el} contactTitle={el} contactValue={props.profile.contacts[el as keyof profileContactsType]}/>
            })}
            </div>

        </div>
    );
};

