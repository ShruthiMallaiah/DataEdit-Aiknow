import * as actionTypes from '../actions';

const initialState = {
    posts: null,
    initialLoad: true
};

const updateObject = (oldState, updatedValues) => (
    {
        ...oldState,
        ...updatedValues
    }
);

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_POST:
            return updateObject(state, { posts: action.posts });
        case actionTypes.SET_INITIAL_LOAD:
            return updateObject(state, { initialLoad: action.initialLoad });
        default: return state;
    }
};

export default authReducer;
