import {messagePageType, reducerAllType} from "./State";


export type NewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

type initialStateType = typeof initialState

let initialState = {
    message: [
        {id: "1", message: "hello"},
        {id: "2", message: "ho ho ho"},
        {id: "3", message: "vnature"},
    ],
    dialog: [
        {id: "1", name: "Ilya"},
        {id: "2", name: "Nastya"},
        {id: "3", name: "Varya"},
        {id: "4", name: "Aiki"}
    ],
    newMessageBody: ""
}

export const messageReducer = (state: initialStateType = initialState, action: reducerAllType):messagePageType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.newMessageBody
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.message.push({id: "6", message: body})
            return state
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