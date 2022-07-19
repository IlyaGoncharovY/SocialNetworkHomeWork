import React, {ChangeEvent, useRef} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string | undefined) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType, any> {
    // statusInputRef = useRef(null)
    statusInputRef = React.createRef<HTMLInputElement>()

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
        this.props.updateStatus(this.statusInputRef.current?.value)
    }

//27:42
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
                        <input ref={this.statusInputRef} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}