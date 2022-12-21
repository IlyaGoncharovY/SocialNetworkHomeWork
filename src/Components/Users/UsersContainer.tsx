import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/r-store";
import {follow, getUsersThunkCreator, setCurrentPageAC, unFollow, usersType} from "../../redux/reducers/users/users-reducer";
import {UsersC} from "./UsersC";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selector";

type mapStateToPropsType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type mapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export type containerUsersType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<containerUsersType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersC users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unFollow}
                    setCurrentPage={this.props.setCurrentPage}
                    onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    // return {
    //     users: state.usersPage.users,
    //     pageSize: state.usersPage.pageSize,
    //     totalUsersCount: state.usersPage.totalUsersCount,
    //     currentPage: state.usersPage.currentPage,
    //     isFetching: state.usersPage.isFetching,
    //     followingInProgress: state.usersPage.followingInProgress
    // }
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// export const UsersContainer = connect(mapStateToProps, {
//     setCurrentPage: setCurrentPageAC,
//     getUsers: getUsersThunkCreator,
//     follow: follow,
//     unFollow: unFollow
// })(UsersAPIComponent)

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow: follow,
        unFollow: unFollow,
        setCurrentPage: setCurrentPageAC,
        getUsers: getUsersThunkCreator
    }),
    // AuthRedirectComponent
)(UsersAPIComponent)