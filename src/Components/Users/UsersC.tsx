import React from "react";
import {usersType} from "../../redux/reducers/users/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import s from "./Users.module.css";


type UsersCType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const UsersC = (props: UsersCType) => {

    return (
        <div className={s.usersContainer}>
            <Paginator pageSize={props.pageSize}
                       totalUsersCount={props.totalUsersCount}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       portionSize={10}
            />
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {props.users.map(user => <User
                    key={user.id}
                    user={user}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}/>
                )}
            </div>

        </div>
    )
}