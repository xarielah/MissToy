export const SET_TOYS = "SET_TOYS";

const initialState = {
    toys: []
};

export const toyReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_TOYS:
            return {
                ...state,
                toy: action.payload
            };
        default:
            return state;
    }
};