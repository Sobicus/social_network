import React from "react";

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode ?
                        <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                        :
                        <div><input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/></div>
                }
            </div>
        )
    }
}