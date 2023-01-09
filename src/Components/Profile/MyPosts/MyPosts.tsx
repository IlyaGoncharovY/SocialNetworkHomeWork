import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {containerPostType} from "./MyPostsContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/r-store";
import {useFormik} from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";

type Values = {
    newPostText: string;
}

export const MyPosts = (props: containerPostType) => {

    const login = useSelector<AppStateType, string | null>(state => state.auth.login)

    let postsElement = [...props.posts].reverse().map(el => <div key={el.id}>
        <Post message={el.message} likeCount={el.likeCount} postId={el.id}/>
    </div>)

    let onAddPost = (values: Values) => {
        props.addPost(values.newPostText)
    }

    const formik = useFormik({
        initialValues: {
            newPostText: "",
            postId: ""
        },
        onSubmit: values => {
            onAddPost(values)
            formik.resetForm()
        },
        validationSchema: Yup.object({
            newPostText: Yup.string()
                .max(40, 'Must be 40 characters or less')
        })
    })

    return (
        <div className={s.postBlock}>
            {login && <div>
                <form onSubmit={formik.handleSubmit}>
                    <h3>{props.title}</h3>
                    <div>
                         <textarea name={"newPostText"}
                                   placeholder={"Enter you post"}
                                   onChange={formik.handleChange}
                                   value={formik.values.newPostText}
                         />
                        {formik.touched.newPostText && formik.errors.newPostText &&
                            <div style={{color: "red", opacity: "0.8"}}>{formik.errors.newPostText}</div>}
                        <div>
                            <Button variant={"contained"} size={"small"} type={"submit"}>ADD POST</Button>
                        </div>
                    </div>
                    <div className={s.posts}>
                        {postsElement}
                    </div>
                </form>
            </div>
            }
        </div>
    );
}

