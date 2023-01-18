import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Users} from "./UsersC";
import {stateType, usersStateType} from "../../redux/store";
import {followAC, setUsersAC} from "../../redux/users-reducer";

let mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users
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
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)