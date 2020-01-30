import types from "../actions/types";

const INITIAL_STATE = {
    listName: "Students",
    list: []
};

const studentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_STUDENTS:
            return {
                ...state,
                list: [...state.list, action.student]
            };
        default:
            return state;
    }
};

export default studentReducer;
