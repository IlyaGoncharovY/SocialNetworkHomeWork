import React from "react";
import userPhoto from "../../assecs/image/avatar.webp";
import s from "./Users.module.css";
import axios from "axios";
import {containerUsersType} from "./UsersContainer";

export class UsersClass extends React.Component<containerUsersType, any> {

    constructor(props: containerUsersType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 this.props.setUsers(response.data.items)
    //             })
    //     }
    // }

    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {this.props.users.map(user => {
                    console.log(user)
                    return <div key={user.id}>
                <span>
                    <div>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={s.usersPhoto}/>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
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
        );
    }
}