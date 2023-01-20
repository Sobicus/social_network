import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {stateType, usersStateType} from "../../redux/store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC} from "../../redux/users-reducer";
import {Users} from "./Users";

type usersPropsType = {
    users: Array<usersStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: Array<usersStateType>) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
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
class UsersContainer extends React.Component<usersPropsType, {}> {
    componentDidMount() {
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

let mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: (users: Array<usersStateType>) => {
            dispatch(setUsersAC(users))
        },
        follow: (usersID: number) => {
            dispatch(followAC(usersID))
        },
        unfollow: (usersID: number) => {
            dispatch(followAC(usersID))
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(setUsersTotalCountAC(totalUsersCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)