import React from 'react';
import {containerUsersType} from "./UsersContainer";
import s from "./Users.module.css"

export const Users = (props: containerUsersType) => {
if (props.users.length === 0) {
    props.setUsers([
        {
            id: "1",
            photoUrl: "https://avatars.mds.yandex.net/i?id=5670781580e23d3e5e3bc06646d52ede-7017675-images-thumbs&n=13",
            followed: false,
            fullName: "Ilya",
            status: "Hello world 1 !",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: "2",
            photoUrl: "https://avatars.mds.yandex.net/i?id=5670781580e23d3e5e3bc06646d52ede-7017675-images-thumbs&n=13",
            followed: true,
            fullName: "Anastasia",
            status: "Hello world 2 !",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: "3",
            photoUrl: "https://avatars.mds.yandex.net/i?id=5670781580e23d3e5e3bc06646d52ede-7017675-images-thumbs&n=13",
            followed: true,
            fullName: "Varvara",
            status: "Hello world 3 !",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: "4",
            photoUrl: "https://avatars.mds.yandex.net/i?id=5670781580e23d3e5e3bc06646d52ede-7017675-images-thumbs&n=13",
            followed: false,
            fullName: "Aiki",
            status: "Hello world 4 !",
            location: {city: "Moscow", country: "Russia"}
        }
    ])
}

    return (
        <div>
            {props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                    <img src={el.photoUrl} className={s.usersPhoto}/>
                    </div>
                    <div>
                        {el.followed ?
                            <button onClick={()=>{props.unfollow(el.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(el.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div>
                       <div>{el.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

