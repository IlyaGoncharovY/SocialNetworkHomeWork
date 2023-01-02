import React from 'react';
import {profileContactsType, profileType, saveProfile} from "../../../../redux/reducers/profile/profile-reducer";
import {useFormik} from "formik";
import {useAppDispatch} from "../../../../redux/r-store";
import Button from "@mui/material/Button";

type ProfileDataFormType = {
    profile: profileType
    goToEditModeHandler: () => void
}

export const ProfileDataForm = (props: ProfileDataFormType) => {

    const dispatch = useAppDispatch()

    let contactsForProfile = props.profile.contacts

    const formik = useFormik({
        initialValues: {
            userId: props.profile.userId,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            contacts: {
                gitHub: contactsForProfile.gitHub,
                vk: contactsForProfile.vk,
                facebook: contactsForProfile.facebook,
                instagram: contactsForProfile.instagram,
                twitter: contactsForProfile.twitter,
                website: contactsForProfile.website,
                youtube: contactsForProfile.youtube,
                mainLink: contactsForProfile.mainLink
            },
            // photos: props.profile.photos
        },
        onSubmit: (values) => {
            dispatch(saveProfile(values))
            props.goToEditModeHandler()
        },
        validate: values => {

        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Button variant={"contained"} size={"small"} type={"submit"}>SAVE</Button>
            </div>

            <div>
                <b>Full Name: </b>
                <div>
                    <input type={"text"}
                           name={"fullName"}
                           placeholder={"Enter full name"}
                           onChange={formik.handleChange}
                           value={formik.values.fullName}
                    />
                </div>
            </div>

            <div>
                <b>Looking for a job: </b>
                <div>
                    <input type={"checkbox"}
                           name={"lookingForAJob"}
                           onChange={formik.handleChange}
                           checked={formik.values.lookingForAJob}
                    />
                </div>
            </div>

            <div>
                <b>My professional skills: </b>
                <div>
                    <textarea name={"lookingForAJobDescription"}
                              placeholder={"Enter you description"}
                              onChange={formik.handleChange}
                              value={formik.values.lookingForAJobDescription}
                    />
                </div>
            </div>

            <div>
                <b>Abut me: </b>
                <div>
                    <textarea name={"aboutMe"}
                              placeholder={"Enter you information"}
                              onChange={formik.handleChange}
                              value={formik.values.aboutMe}
                    />
                </div>
            </div>

            <div>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(el => {
                return (
                    <div key={el}>
                        <b>{el}: </b>
                        <div>
                            <input type={"text"}
                                   name={"contacts. " + el}
                                   placeholder={el}
                                   onChange={formik.handleChange}
                                   value={formik.values.contacts[el as keyof profileContactsType]}
                            />
                        </div>
                    </div>
                )
            })}
            </div>
        </form>
    );
};

