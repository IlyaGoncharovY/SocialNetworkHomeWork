export const required = (value: string) => {
    if (value) return undefined
    return "Field is required"
}

//maxlength15, minlength2


export const maxLengthCreator = (maxLength:number) => (value: string) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}