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
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get<responseType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
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