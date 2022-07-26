import React from "react";
import s from "./FormControl.module.css"
import any = jasmine.any;


type TextareaType = {
    input:inputType
    meta:metaType
    children: any
}
type inputType = {
    name: string
    onBlur: any
    onChange: any
    onDragStart: any
    onDrop: any
    onFocus: any
    value: string
}
type metaType = {
    active: boolean
    asyncValidating: boolean
    autofilled: boolean
    dirty: boolean
    dispatch: any
    error: undefined | any
    form: string
    initial: undefined | any
    invalid: boolean
    pristine: boolean
    submitFailed: boolean
    submitting: boolean
    touched: boolean
    valid: boolean
    visited: boolean
    warning: undefined | any
}

// const FormControl = ({input, meta, children, ...props}:TextareaType) => {
//     debugger
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : "")}>
//             <div>
//                 {/*<textarea {...input} {...props}/>*/}
//                 {props.children}
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }


export const Textarea = ({input, meta, ...props}:TextareaType) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
        // <FormControl input={input} meta={meta} child={""}><textarea {...input} {...props}/></FormControl>
    )
}

export const Input = ({input, meta, ...props}:TextareaType) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
        // <FormControl input={input} meta={meta}><input {...input} {...props}/></FormControl>
    )
}