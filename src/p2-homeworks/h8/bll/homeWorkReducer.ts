import {UserType} from "../HW8";
type ActionSortUpType = {
    type:'sort'
    payload: 'up'
}
type ActionSortDownType = {
    type:'sort'
    payload: 'down'
}
type ActionCheckAgeType = {
    type:'check'
    payload: number
}
type ActionType = ActionSortUpType | ActionSortDownType | ActionCheckAgeType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            if(action.payload === 'up'){
                return newState.sort((a,b) => a.name>b.name ? 1 : -1)
            } else {
                return newState.sort((a,b) => a.name<b.name ? 1 : -1)
            }

        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age > action.payload)
        }
        default: return state
    }
}
export const sortNameUpAC = ():ActionSortUpType => {
    return {type:'sort', payload: 'up'}
}
export const sortNameDownAC = ():ActionSortDownType => {
    return {type:'sort', payload: 'down'}
}
export const checkAgeAC = (payload:number):ActionCheckAgeType => {
    return {type:'check', payload}
}