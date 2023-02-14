import React from "react";

type ProfileStatusPropsType = {
    status: string
}

/*
tReact.FC<ProfileStatusPropsType>

 */
export class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
    render() {
        return(
        <>
            <div>
                <span>
                    {this.props.status}
                </span>
            </div>
            <div>
                <input value={this.props.status}/>
            </div>
        </>
        )
    }
}