import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersType
} from "../../redux/users-reducer";
import axios from "axios";
import {UsersC} from "./UsersC";
import {Preloader} from "../common/Preloader/Preloader";

type mapStateToPropsType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: usersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching:boolean) => void
}

export type containerUsersType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<containerUsersType, any> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersC users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setUsers={this.props.setUsers}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching:boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

