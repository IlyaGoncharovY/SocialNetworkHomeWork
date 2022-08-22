import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {getUserData, logOut} from "../../redux/auth-reducer";


type mapStateToPropsType = {
    login: string,
    isAuth: boolean
}

type mapDispatchToPropsType = {
    // getUserData: () => void
    logOut: () => void
}

type HeaderAPIContainerType = mapStateToPropsType & mapDispatchToPropsType

export class HeaderAPIComponent extends React.Component<HeaderAPIContainerType, any> {
    // componentDidMount() {
    //     this.props.getUserData()
    // }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
};


const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export const HeaderContainer = connect(mapStateToProps, {
    // getUserData: getUserData,
    logOut: logOut
})(HeaderAPIComponent)

