import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./ProfileStatus.module.css"


type ProfileStatusWithHooksType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMod = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }


    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={s.ProfileStatusContainer}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMod}>{props.status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}
                    />
                </div>
            }
        </div>
    )
}
