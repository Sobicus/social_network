import {combineReducers, createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store = createStore(rootReducer)