import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {dataType, setUserDataAC} from "../../redux/auth-reducer";


type mapStateToPropsType = {
    login: string,
    isAuth: boolean
}

type mapDispatchToPropsType = {
    setAuthUserData: (data: dataType)=>void
}

type HeaderAPIContainerType = mapStateToPropsType & mapDispatchToPropsType

export class HeaderAPIComponent extends React.Component<HeaderAPIContainerType, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {
               if (response.data.resultCode === 0) {
                   // let {id, login, email} = response.data
                   this.props.setAuthUserData(response.data)
               }
            })
    }

    render() {
        return (
           <Header {...this.props}/>
        );
    }
};


const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData: setUserDataAC
})(HeaderAPIComponent)

