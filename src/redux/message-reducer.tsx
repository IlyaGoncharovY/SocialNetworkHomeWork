import {messagePageType, reducerAllType} from "./State";


export type NewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export type messageActionType = NewMessageBodyActionType | SendMessageActionType

export const messageReducer = (state: messagePageType, action: reducerAllType):messagePageType => {

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