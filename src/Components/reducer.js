const userDetails = {
    user: null,
}

const actionTypes = {
    SET_USER: "SET_USER",
    SIGN_OUT: "SIGN_OUT",
}

const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case actionTypes.SIGN_OUT:
            return {
                ...state,
                user: null,
            }
        default:
        return state;
    }
}

export { userDetails, actionTypes }
export default reducer;