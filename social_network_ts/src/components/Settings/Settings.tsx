import React from "react";
import s from './Settings.module.css'
type SettingsPropsType ={
    text:string
}
export const Settings = (props:SettingsPropsType) => {
    return (
        <div>
            Settings
            {props.text}
        </div>
    )
}