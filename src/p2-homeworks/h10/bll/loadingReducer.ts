const initState:InitStateType = {
    loading:false
}
export type InitStateType = {
    loading:boolean
}
export type ActionType = {
    type: 'LOADING',
    payload: {loading:boolean},
}

export const loadingReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, ...action.payload}
        }
        default: return state
    }
}

export const loadingAC = (loading:boolean): ActionType => {
    return  {type: 'LOADING', payload: {loading}}
}// fix any