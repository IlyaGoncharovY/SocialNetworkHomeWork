import React from "react";
import userPhoto from "../../assecs/image/avatar.webp";
import s from "./Users.module.css";
import axios from "axios";
import {containerUsersType} from "./UsersContainer";

export class UsersClass extends React.Component<containerUsersType, any> {

    // constructor(props: containerUsersType) {
    //     super(props);
    //     // axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //     //     .then(response => {
    //     //         this.props.setUsers(response.data.items)
    //     //     })
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                {pages.map(el => {
                    // if (this.props.currentPage === el && s.selectedPage) {
                    //     <span className={s.selectedPage}>{el}</span>
                    // } else {<span>{el}</span>}
                    // @ts-ignore
                    return <span className={this.props.currentPage === el && s.selectedPage}
                                 onClick={() => {
                                     this.onPageChanged(el)
                                 }}>{el}</span>
                })}

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