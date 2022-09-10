import React from "react";
import s from "./FormControl.module.css"
import {Field} from "redux-form";


type TextareaType = {
    input: inputType
    meta: metaType
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

const FormControl: React.FC<TextareaType> = ({
                                                 input,
                                                 meta,
                                                 children,
                                                 ...props
                                             }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}: TextareaType) => {
    return (
        <FormControl input={input} meta={meta}><textarea {...input} {...props}/></FormControl>
    )
}

export const Input = ({input, meta, ...props}: TextareaType) => {
    return (
        <FormControl input={input} meta={meta}><input {...input} {...props}/></FormControl>
    )
}

export const createField = (placeholder: string,
                            name: string,
                            validate: any,
                            component: any,
                            props: any = {},
                            text:string = "") =>
    <Field placeholder={placeholder}
           name={name}
           validate={validate}
           component={component}/>