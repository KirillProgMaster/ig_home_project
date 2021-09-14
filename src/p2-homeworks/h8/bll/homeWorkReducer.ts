import {UserType} from "../HW8";

type ActionSortType = {
    type:'sort'
    payload: 'down' | 'up'
}
type ActionCheckAgeType = {
    type:'check'
    payload: number
}
type ActionType = ActionSortType | ActionCheckAgeType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age > action.payload)
        }
        default: return state
    }
}
export const sortAC = (payload:'down' | 'up'):ActionSortType => {
    return {type:'sort', payload}
}
export const checkAgeAC = (payload:number):ActionCheckAgeType => {
    return {type:'check', payload}
}