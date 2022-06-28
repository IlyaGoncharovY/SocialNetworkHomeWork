import React from "react";
import userPhoto from "../../assecs/image/avatar.webp";
import s from "./Users.module.css";
import {usersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersCType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: usersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const UsersC = (props: UsersCType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            {pages.map(el => {

                return <span className={props.currentPage === el ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(el)
                             }}>{el}</span>
            })}
            {props.users.map(user => {

                return <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={"/profile"}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                         className={s.usersPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                       <div>{"user.location.city"}</div>
                    </span>
                </span>
                </div>
            })}
        </div>
    )
}