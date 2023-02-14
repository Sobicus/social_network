import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {usersStateType} from "../../redux/store";
import {
    followTC,
    setCurrentPageAC,
    unfollowTC, toggleFollowingProgressAC, getUsersTC
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

type UsersPropsType = {
    users: Array<usersStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow: followTC,
    unfollow: unfollowTC,
    setCurrentPage: setCurrentPageAC,
    toggleFollowingProgress: toggleFollowingProgressAC,
    getUsers: getUsersTC
}),withAuthRedirect)(UsersContainer)

// let UsersContainerWithAuthRedirect = withAuthRedirect(UsersContainer)
//
// export default connect(mapStateToProps, {
//     follow: followTC,
//     unfollow: unfollowTC,
//     setCurrentPage: setCurrentPageAC,
//     toggleFollowingProgress: toggleFollowingProgressAC,
//     getUsers: getUsersTC
// })(UsersContainerWithAuthRedirect)