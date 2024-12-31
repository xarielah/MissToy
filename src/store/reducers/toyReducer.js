
export const SET_TOYS = "SET_TOYS";
export const SET_FILTER_NAME = "SET_FILTER_NAME";
export const SET_FILTER_LABELS = "SET_FILTER_LABELS";
export const SET_FILTER_IN_STOCK = "SET_FILTER_IN_STOCK";
export const SET_SORT_BY = "SET_SORT_BY";

export const sortValues = {
    name: 'name',
    price: 'price',
    created: 'created'
}

const initialState = {
    toys: [],
    filterBy: {
        name: '',
        labels: [],
        inStock: null
    },
    sortBy: {
        field: null,
        asc: true
    }
};

export const toyReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_TOYS:
            return {
                ...state,
                toy: action.payload
            };
        case SET_FILTER_NAME:
            return {
                ...state,
                filterBy: {
                    ...state.filterBy,
                    name: action.payload
                }
            };
        case SET_FILTER_LABELS:
            return {
                ...state,
                filterBy: {
                    ...state.filterBy,
                    labels: action.payload
                }
            };
        case SET_FILTER_IN_STOCK:
            return {
                ...state,
                filterBy: {
                    ...state.filterBy,
                    inStock: action.payload
                }
            };
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: { ...action.payload }
            };
        default:
            return state;
    }
};