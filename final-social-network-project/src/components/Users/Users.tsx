import React, {useEffect} from 'react'
import axios from "axios";
import {usersStateType} from "../../redux/store";
import style from './users.module.css';
import userPhoto from '../../assets/img/users_avatar.png'

type usersPropsType = {
    users: Array<usersStateType>
    setUsers: (users: Array<usersStateType>) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}
type responseType = {
    items: Array<responseItemType>
    totalCount: number
    error: string
}
type responseItemType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: usersPhotosStateType
    status: string
    followed: boolean
}
type usersPhotosStateType = {
    small: string
    large: string
}
export const Users = (props: usersPropsType) => {
    if (props.users.length === 0) {
        axios.get<responseType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    // if (props.users.length === 0) {
    //     props.setUsers([{
    //         name: 'Alina',
    //         id: 1,
    //         uniqueUrlName: 'test',
    //         photos: {small: "null", large: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top'},
    //         status: 'I am a boss',
    //         followed: false
    //     },
    //         {
    //             name: 'Max',
    //             id: 2,
    //             uniqueUrlName: 'test',
    //             photos: {small: "null", large: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top'},
    //             status: 'I am a boss',
    //             followed: true
    //         },
    //         {
    //             name: 'Vika',
    //             id: 3,
    //             uniqueUrlName: 'test',
    //             photos: {small: "null", large: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top'},
    //             status: 'I am a boss',
    //             followed: false
    //         },])
    // }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><
                        img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Avatar"
                            className={style.userPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => props.follow(u.id)}>Follow</button>
                                : <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}

        </div>
    )
}