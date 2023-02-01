import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {usersStateType} from "../../redux/store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC, unfollowAC
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {RootStateType} from "../../redux/redux-store";

type UsersPropsType = {
    users: Array<usersStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: Array<usersStateType>) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
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

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials:true}).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials:true}).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    setUsers: setUsersAC,
    follow: followAC,
    unfollow: unfollowAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC
})(UsersContainer)