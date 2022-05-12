const initState = {
    isLoading: false,
};

export type InitStateType = typeof initState;

export const loadingReducer = (state:InitStateType = initState, action: LoadingActionType):InitStateType => {
    switch (action.type) {
        case 'CHANGE-STATUS-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }
        default:
            return state
    }
}

export type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'CHANGE-STATUS-LOADING',
        isLoading
    }as const
}