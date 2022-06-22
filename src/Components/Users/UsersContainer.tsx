import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, usersType} from "../../redux/users-reducer";

type mapStateToPropsType = {
    users: usersType[]
}

type mapDispatchToPropsType = {
    follow: (userID: string)=>void
    unfollow: (userID: string)=>void
    setUsers: (users:usersType[])=>void
}

export type containerUsersType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:usersType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

