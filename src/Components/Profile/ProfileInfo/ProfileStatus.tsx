import React from 'react';
import s from "./Profile.module.css"
import {profileType} from "../../../redux/profile-reducer";

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType, any> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        // this.forceUpdate()    ;)
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}