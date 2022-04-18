import {UserType} from "../HW8";

export type StateType = Array<UserType>

export type SortUpType = {
    type: 'SORT_UP'
    payload: 'up'
}

export type SortDownType = {
    type: 'SORT_DOWN'
    payload: 'down'
}

export type CheckAgeType = {
    type: 'CHECK_AGE'
    payload: number
}

export type ActionType = SortUpType | SortDownType | CheckAgeType


export const homeWorkReducer = (state: StateType, action: ActionType): StateType => { // need to fix any
    switch (action.type) {
        case 'SORT_UP': {
            return [...state.sort((a, b) => a.name.localeCompare(b.name))]
        }
        case 'SORT_DOWN': {
            return [...state.sort((a, b) => b.name.localeCompare(a.name))]
        }
        case 'CHECK_AGE': {
            return [...state.filter(user => user.age > action.payload)]
        }

        default:
            return state
    }
}
