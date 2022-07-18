import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/r-store";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function AuthRedirectComponent<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {

        let {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to={"./login"}/>
        return <Component {...restProps as T}/>
    }

    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent
}