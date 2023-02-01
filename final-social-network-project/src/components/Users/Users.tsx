import style from "./users.module.css";
import userPhoto from "../../assets/img/users_avatar.png";
import React from "react";
import {usersStateType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";

type usersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<usersStateType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}
export const Users: React.FC<usersType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props.users)
    return (
        <div>
            <div>
                {pages.map(el => {
                        return <span className={props.currentPage === el ? style.selectedPage : ''} onClick={() => {
                            props.onPageChanged(el)
                        }}>
                            {el}
                        </span>
                    }
                )}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Avatar"
                             className={style.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            !u.followed
                                ? <button onClick={() => {
                                    axios.post<FollowUnfollowType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {"API-KEY":"978ec9e4-88e0-4331-b5bc-a8ba69be02cb"}
                                    })
                                        .then(res => {
                                            console.log(res)
                                            if (res.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Follow</button>
                                : <button onClick={() => {
                                    axios.delete<FollowUnfollowType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {"API-KEY":"978ec9e4-88e0-4331-b5bc-a8ba69be02cb"}
                                    })
                                        .then(res => {
                                            console.log(res)
                                            if (res.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
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
type FollowUnfollowType={
    resultCode: number
    messages: Array<string>
    data: {}
}