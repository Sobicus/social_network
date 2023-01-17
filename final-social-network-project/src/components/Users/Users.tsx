import React, {useEffect} from 'react'
import {usersStateType} from "../../redux/store";
import style from './users.module.css';

type usersPropsType = {
    users: Array<usersStateType>
    setUsers: (users: Array<usersStateType>) => void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
}
export const Users = (props: usersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: '1',
            photoUrl: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
            followed: false,
            fullName: 'Dmitriy',
            status: 'I am a boss',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
            {
                id: '2',
                photoUrl: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
                followed: true,
                fullName: 'Maksim',
                status: 'Hard work',
                location: {city: 'Odessa', country: 'Ukraine'}
            },
            {
                id: '3',
                photoUrl: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
                followed: true,
                fullName: 'Alina',
                status: 'Business lady',
                location: {city: 'Altea', country: 'Spain'}
            },
            {
                id: '4',
                photoUrl: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
                followed: true,
                fullName: 'Vika',
                status: 'Just for fun',
                location: {city: 'New-York', country: 'USA'}
            },
            {
                id: '5',
                photoUrl: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top',
                followed: false,
                fullName: 'Emiliia',
                status: 'Life is game',
                location: {city: 'Ottawa', country: 'Canada'}
            }])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><
                        img src={u.photoUrl} alt="Avatar" className={style.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}

        </div>
    )
}