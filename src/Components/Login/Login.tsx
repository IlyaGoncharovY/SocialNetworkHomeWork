import React from 'react';
import {login} from "../../redux/reducers/auth/auth-reducer";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType, useAppDispatch} from "../../redux/r-store";
import {useFormik} from "formik";

type formikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useAppDispatch()

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const userId = useSelector<AppStateType, number | null>(state => state.auth.id)
    const captchaUrl = useSelector<AppStateType, string>(state => state.auth.captchaUrl)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
            captcha: ""
        },
        onSubmit: values => {
            dispatch(login(values))
        },
        validate: values => {
            const err: formikErrorType = {}
            if (!values.email) {
                err.email = "Email is required"
            }
            if (!values.password) {
                err.password = "Email is required"
            }
            return err
        }
    })

    if (isAuth) {
        return <Redirect to={`/profile/${userId}`}/>
    }

    return (
        <div>
            <label>
                <p>
                    To log in get registered <a href="https://social-network.samuraijs.com/"
                                                target={"_blank"}>here</a>
                </p>
                <p>
                    or use common test account credentials:
                </p>
                <p>
                    Email: free@samuraijs.com
                </p>
                <p>
                    Password: free
                </p>
            </label>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type="email"
                           name="email"
                           placeholder="Email"
                           onChange={formik.handleChange}
                           value={formik.values.email}
                    />
                </div>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                <div>
                    <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formik.values.rememberMe}
                        onChange={formik.handleChange}
                    />
                    <span>Remember me</span>
                </div>
                <div>
                    {captchaUrl && <img src={captchaUrl} alt={"captcha"}/>}
                    {captchaUrl && <div>
                        <input type={"text"}
                               name={"captcha"}
                               placeholder={"Enter captcha"}
                               onChange={formik.handleChange}
                               value={formik.values.captcha}
                        />
                    </div>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}



