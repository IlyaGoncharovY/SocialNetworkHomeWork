export type NewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export type initialStateType = typeof initialState

export type messageReducerActionType =
    NewMessageBodyActionType |
    SendMessageActionType

export type messageType = {
    id: string
    message: string
}
export type dialogType = {
    id: string
    name: string
}

let initialState = {
    message: [
        {id: "1", message: "hello"},
        {id: "2", message: "ho ho ho"},
        {id: "3", message: "vnature"},
    ] as messageType[],
    dialog: [
        {id: "1", name: "Ilya"},
        {id: "2", name: "Nastya"},
        {id: "3", name: "Varya"},
        {id: "4", name: "Aiki"}
    ] as dialogType[],
    newMessageBody: ""
}

export const dialogsReducer = (state: initialStateType = initialState, action: messageReducerActionType): initialStateType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return  {
                ...state,
                newMessageBody: action.newMessageBody
            }
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            return  {
                ...state,
                newMessageBody: "",
                message: [...state.message, {id: "6", message: body}]
            }
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (newMessageBody: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessageBody
    } as const
}

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}