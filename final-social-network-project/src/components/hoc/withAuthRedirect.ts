import {Navigate} from "react-router-dom";
import React from "react";

export const withAuthRedirect=(Component:any)=>{
    class RedirectComponent extends React.Component{
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>

            return <Component {...this.props}>
        }
    }
}
export const withAuthRedirect1=(Component:any)=>{
    const RedirectComponent=()=>{
        return(
        if (props.isAuth) return <Navigate to={'/login'}/>

        <Component {...this.props}>

        )
    }
}