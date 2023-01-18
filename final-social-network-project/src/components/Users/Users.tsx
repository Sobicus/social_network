import React from 'react'
import axios from "axios";
import {usersStateType} from "../../redux/store";
import style from './users.module.css';
import userPhoto from '../../assets/img/users_avatar.png'

type usersPropsType = {
    users: Array<usersStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: Array<usersStateType>) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage:(pageNumber:number)=>void
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

export class Users extends React.Component<usersPropsType, {}> {
    componentDidMount() {
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(el=>{
                        return <span className={this.props.currentPage===el ? style.selectedPage:''} onClick={()=>{this.onPageChanged(el)}}>
                            {el}
                        </span>}
                    )}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Avatar"
                             className={style.userPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => this.props.follow(u.id)}>Follow</button>
                                : <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
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
}
