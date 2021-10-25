const initState = {
    theme:"dark"
};
export type InitialStateType ={
    theme:string
}
export type ActionType = {
    type:"CHANGE-THEME"
    payload:{theme:string}
}

export const themeReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, ...action.payload};
        }
        default: return state;
    }
};

export const changeThemeC = (theme:string): ActionType => {
    return {type:"CHANGE-THEME", payload:{theme}}
}; // fix any