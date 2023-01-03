import React from "react";
import {store} from "./redux/redux-store";
import App from "./App";

export const StoreContext = React.createContext(null)

export const Provider = (props: any) => {
    return <StoreContext.Provider value = {props.store} >
        {props.children}
        < /StoreContext.Provider>
}