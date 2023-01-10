import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let rootReducer = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

// import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
// import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
// import { dialogsReducer } from './dialogs-reducer';
// import { profileReducer } from './profile-reducer';
//
// export const store = configureStore({
//     reducer: {
//         profilePage: profileReducer,
//         dialogsPage: dialogsReducer
//     },
// });
//
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >;
//
// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
