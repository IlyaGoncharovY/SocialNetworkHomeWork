import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControl";
import {required} from "../../utils/validators/validator";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/r-store";
import s from "../common/FormsControls/FormControl.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type mapDispatchToProps = {
    login: (FormData: FormDataType) => void
    isAuth: boolean
}
type mapStateToPropsType = {
    isAuth: boolean
}
// type LoginComponentType = mapDispatchToProps | mapStateToPropsType

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"}
                       name={"email"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       type={"password"}
                       name={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {
                props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

const Login = (props: mapDispatchToProps) => {
    // const dispatch = useAppDispatch()
    const onSubmit = (formData: FormDataType) => {
        // dispatch(login(email, password, rememberMe))
        // dispatch(getUserData())
        props.login(formData)
        console.log(formData)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)





