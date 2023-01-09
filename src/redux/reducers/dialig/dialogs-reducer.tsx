export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export type initialStateType = typeof initialState

export type messageReducerActionType =
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
        {id: "2", message: "hello2"},
        {id: "3", message: "hello3"},
    ] as messageType[],
    dialog: [
        {id: "1", name: "Ilya"},
        {id: "2", name: "Nastya"},
        {id: "3", name: "Varya"},
        {id: "4", name: "Dmitriy"},
        {id: "5", name: "Andrey"},
        {id: "6", name: "Misha"}
    ] as dialogType[],
    newMessageBody: ""
}

export const dialogsReducer = (state: initialStateType = initialState, action: messageReducerActionType): initialStateType => {

    switch (action.type) {
        case "SEND-MESSAGE":
            let body = action.newMessageBody
            return  {
                ...state,
                message: [...state.message, {id: "6", message: body}]
            }
        default:
            return state
    }
}


export const sendMessageAC = (newMessageBody:string) => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody
    } as const
}