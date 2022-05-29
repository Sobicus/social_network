import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirRAu3DZ4oS_fxG1IKKFHhKcjqp6iVGnqFg&usqp=CAU"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}