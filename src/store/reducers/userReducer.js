
export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// While loading the user we treat these values in the components as:
// udefined = loading
// null = not logged in
// object = logged in
const initialState = {
    user: undefined
};

// User Model Example:
// {
//     name: "Ariel",
//     email: "ariel@gmail.com",
//     password: "123456",
//     isAdmin: true
// }

export const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};