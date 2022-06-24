import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersType
} from "../../redux/users-reducer";
import {UsersClass} from "./UsersClass";

type mapStateToPropsType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: usersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type containerUsersType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

