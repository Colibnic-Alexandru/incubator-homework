const initState = {
  themes: 'some'
}

type ThemesType = {
    themes: string
}

export type InitStateType = ThemesType;

export const themeReducer = (state:InitStateType = initState, action: ActionType):InitStateType => {
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                themes: action.payload
            }
        }
        default: return state;
    }
};

export type ActionType = ReturnType<typeof changeThemeC>

export const changeThemeC = (themes: string) => {
    return{
        type: 'CHANGE_THEME',
        payload: themes
    }
};