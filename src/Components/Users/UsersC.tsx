import React from "react";
import userPhoto from "../../assecs/image/avatar.webp";
import s from "./Users.module.css";
import {usersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
                             }} >{el}</span>
            })}
            {props.users.map(user => {

                return <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                         className={s.usersPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "3464b8a0-c9aa-4269-a1f1-731b09a66663"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                    })
                            }}>Unfollow</button>

                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "3464b8a0-c9aa-4269-a1f1-731b09a66663"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    })
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