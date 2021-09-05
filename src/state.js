import ColorScheme from "color-scheme"

const eventType = ["Sleep","S","F","SW","DW","M","W","IS","E","H","P","C"]

const scheme = new ColorScheme;
scheme.from_hue(21)
  .scheme('tetrade')
  
const colors = scheme.colors()

export const EVENT_COLOR_MAP = eventType.reduce(
    (m, eventName, i) => m.set(eventName, colors[i]), new Map()
)

export const ACTION_ENUM = Object.freeze({
    SELECT_EVENT: 0,
    CHANGE_TIME_BLOCK_SIZE: 1,
    CHANGE_LABEL_SIZE: 2
})

export const TIME_BLOCK_SIZE_ENUM = Object.freeze({
    FIFTEEN: 60*15,
    THIRTY: 60*30,
    SIXTY: 60*60,
    TWO_HOURS: 60*60*2
})

export const initialState = {
    timeBlockSize : TIME_BLOCK_SIZE_ENUM.FIFTEEN,
    labelSize : TIME_BLOCK_SIZE_ENUM.SIXTY,
    selectedEventType: EVENT_COLOR_MAP.keys().next().value
}

export default function reducer(state, action){
    switch (action.type) {
        case ACTION_ENUM.SELECT_EVENT:
            return {...state, selectedEventType : action.eventType}
        case ACTION_ENUM.CHANGE_TIME_BLOCK_SIZE:
            return state
        case ACTION_ENUM.CHANGE_LABEL_SIZE:
            return state
        default:
            return state
    }
}