import React from 'react';
import {profileContactsType, profileType, saveProfile} from "../../../../redux/reducers/profile/profile-reducer";
import {useFormik} from "formik";
import {useAppDispatch} from "../../../../redux/r-store";
import Button from "@mui/material/Button";
import * as Yup from 'yup';

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
                github: contactsForProfile.github,
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
        validationSchema: Yup.object({
            lookingForAJobDescription: Yup.string()
                .min(10, 'Must be 10 characters or less')
                .required('Required'),
            fullName: Yup.string()
                .min(3, 'Must be 3 characters or less')
                .required('Required'),
            aboutMe:  Yup.string()
                .min(10, 'Must be 10 characters or less')
                .required('Required'),
            // gitHub: Yup.string().email('Invalid email address').required('Required'),
            // vk: Yup.string().email('Invalid email address').required('Required'),
            // facebook: Yup.string().email('Invalid email address').required('Required'),
            // instagram: Yup.string().email('Invalid email address').required('Required'),
            // twitter: Yup.string().email('Invalid email address').required('Required'),
            // website: Yup.string().email('Invalid email address').required('Required'),
            // youtube: Yup.string().email('Invalid email address').required('Required'),
            // mainLink: Yup.string().email('Invalid email address').required('Required'),
        }),
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
                    {formik.touched.fullName && formik.errors.fullName &&
                        <div style={{color: "red", opacity:"0.8"}}>{formik.errors.fullName}</div>}
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
                    {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                        <div style={{color: "red", opacity:"0.8"}}>{formik.errors.lookingForAJobDescription}</div>}
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
                    {formik.touched.aboutMe && formik.errors.aboutMe &&
                        <div style={{color: "red", opacity:"0.8"}}>{formik.errors.aboutMe}</div>}
                </div>
            </div>

            <div>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(el => {
                return (
                    <div key={el}>
                        <b>{el}: </b>
                        <div>
                            <input type={"text"}
                                   name={"contacts." + el}
                                   placeholder={el}
                                   onChange={formik.handleChange}
                                   value={formik.values.contacts[el as keyof profileContactsType]}
                            />
                            {/*{formik.touched.contacts?[el] && formik.errors?[el]*/}
                            {/*    ? <div style={{color: "red", opacity:"0.8"}}>{formik.errors?[el]}</div>
                            : null}*/}
                        </div>
                    </div>
                )
            })}
            </div>
        </form>
    );
};

