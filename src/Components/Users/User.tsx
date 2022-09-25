import React from "react";
import userPhoto from "../../assecs/image/avatarLogo.png";
import s from "./Users.module.css";
import {usersType} from "../../redux/reducers/users/users-reducer";
import {NavLink} from "react-router-dom";


type UserType = {
    user: usersType
    followingInProgress: number[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const User = (props: UserType) => {
    let user = props.user

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                         className={s.usersPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        props.unfollow(user.id)
                                    }
                                    }>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          props.follow(user.id)
                                      }
                                      }>Follow</button>}
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
    )
}
